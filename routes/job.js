'use strict';

const router = require('express').Router();
const knex = require('../knex.js');
const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');
const auth = require('../utils/authentication');

router.get('/:id', auth, (req, res, next) => {
  const { userId } = req.token;
  const jobId = req.params.id;

  if (!jobId || typeof jobId !== 'number')
    throw boom.create(400, 'Bad Request');

  const toSend = {};

  knex('job')
    .where('id', jobId)
    .select('id', 'company_id', 'description', 'title')
    .then((rows) => {
      const job = camelizeKeys(rows[0]);

      toSend.job.description = job.description;
      toSend.job.title = job.title;

      return knex('company')
        .where('id', job.companyId)
        .then((row) => {
          const company = camelizeKeys(row[0]);

          toSend.company.name = company.name;

          return knex('application')
            .select('id', 'note')
            .where('job_id', job.id)
            .andWhere('user_id', userId)
            .orderBy('id', 'ASC')
            .then((rows) => {
              const application = camelizeKeys(rows[0]);

              toSend.job.note = application.note;

              return knex('interaction')
                .where('application_id', application.id)
                .then((rows) => {
                  toSend.interactions = camelizeKeys(rows).map( e => e.type );

                  return knex('tech')
                    .select('tag.name')
                    .innerJoin('application', 'application.id', 'tech.application_id')
                    .innerJoin('tag', 'tag.id', 'tech.tag_id')
                    .orderBy('tag.name', 'DESC')
                    .where('tech.application_id', application.id)
                    .then((rows) => {
                      toSend.job.techStack = camelizeKeys(rows).map( e => e.name );

                      return knex('industry')
                        .select('tag.name')
                        .innerJoin('job', 'job.id', 'industry.job_id')
                        .innerJoin('tag', 'tag.id', 'industry.tag_id')
                        .where('industry.job_id', jobId)
                        .then((rows) => {
                          toSend.job.techStack = camelizeKeys(rows).map( e => e.name );

                          res.send(toSend);
                        })
                        .catch((err) => {
                          next(err);
                        });
                    })
                    .catch((err) => {
                      next(err);
                    });
                })
                .catch((err) => {
                  next(err);
                });
            })
            .catch((err) => {
              next(err);
            });
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
