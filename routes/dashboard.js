'use strict';

const router = require('express').Router();
const knex = require('../knex.js');
const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');
const auth = require('../utils/authentication');

router.get('*', auth, (req, res, next) => {
  const { userId } = req.token;

  knex('application')
    .where('user_id', userId)
    .then(rows => {
      const applications = camelizeKeys(rows);

      Promise.all(applications.map(app => {
        return knex('job')
          .where('id', app.jobId)
          .first()
          .then(row => {
            const job = camelizeKeys(row);

            return knex('company')
              .where('id', job.companyId)
              .first()
              .then(row => {
                const company = camelizeKeys(row);

                return knex('industry')
                  .innerJoin('job', 'job.id', 'industry.job_id')
                  .innerJoin('tag', 'tag.id', 'industry.tag_id')
                  .where('industry.job_id', job.id)
                  .then(rows => {
                    const tags = camelizeKeys(rows).map( e => e.name);

                    return {
                      companyName: company.name,
                      jobTitle: job.title,
                      industries: tags,
                    };
                  })
                  .catch(err => {
                    next(err);
                  });
              })
              .catch(err => {
                next(err);
              });
          })
          .catch(err => {
            next(err);
          });
      }))
      .then(jobApps => {
        res.send(jobApps);
      })
      .catch(err => {
        next(err);
      });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
