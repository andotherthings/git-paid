const router = require('express').Router();
const knex = require('../knex.js');
const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');
const auth = require('../utils/authentication');

router.post('*', auth, (req, res, next) => {
  const { userId } = req.token;
  const body = req.body;

  if (!userId || typeof userId !== 'string') {
    throw boom.create(400, 'Bad Request');
  }

  knex('company')
    .insert(decamelizeKeys(body.company), '*')
    .then(company => {
      return knex.transaction(trx => {
        const newJob = body.job;

        delete newJob.techStack;
        delete newJob.industries;

        newJob.companyId = company.id;

        return knex('job')
          .insert(decamelizeKeys(newJob), '*').transacting(trx)
          .then(insertedJob => {
            return knex('address')
              .insert(decamelizeKeys(body.jobAddress), '*').transacting(trx)
              .then(jobAddress => {
                const officeAddress = {
                  jobId: insertedJob.id,
                  addressId: jobAddress.id,
                };

                return knex('office')
                  .insert(decamelizeKeys(officeAddress), '*').transacting(trx);
              })
              .then(() => {
                return Promise.all(body.job.industries.map(tag => {
                  return knex('tag')
                    .insert(decamelizeKeys({ name: tag }), '*').transacting(trx)
                    .then(insertedTag => {
                      return knex('industry')
                        .insert(decamelizeKeys({ jobId: insertedJob.id, tagId: insertedTag.id }), '*').transacting(trx);
                    });
                }));
              })
              .then(() => {
                const newApp = {
                  userId,
                  jobId: insertedJob.id,
                };

                return knex('application')
                  .insert(decamelizeKeys(newApp), '*').transacting(trx)
                  .then(insertedApp => {
                    return Promise.all(body.job.techStack.map(tag => {
                      return knex('tag')
                        .insert(decamelizeKeys({ name: tag }), '*').transacting(trx)
                        .then(insertedTag => {
                          return knex('tech')
                            .insert(decamelizeKeys({ applicationId: insertedApp.id, tagId: insertedTag.id }), '*').transacting(trx);
                        });
                    }))
                    .then(() => {
                      return Promise.all(body.interactions.map(interaction => {
                        return knex('interaction')
                          .insert(decamelizeKeys({ applicationId: insertedApp.id, type: interaction }), '*').transacting(trx);
                      }));
                    });
                  });
              });
          })
          .then(() => {
            return knex('address')
              .insert(decamelizeKeys(body.companyAddress), '*').transacting(trx)
              .then(companyAddress => {
                const hqAddress = {
                  companyId: company.id,
                  addressId: companyAddress.id,
                };

                return knex('hq')
                  .insert(decamelizeKeys(hqAddress), '*').transacting(trx);
              });
          })
          .then(trx.commit)
          .catch(trx.rollback);
      });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
