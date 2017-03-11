'use strict';

const router = require('express').Router();
const knex = require('../knex.js');
const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');
const auth = require('../utils/authentication');

router.post('/data', auth, (req, res, next) => {
  const { userId } = req.token;
  const body = req.body;

  if (!userId || typeof userId !== 'string')
    throw boom.create(400, 'Bad Request');

  knex('company')
    .insert(decamelizeKeys(body.company), '*')
    .then((company) => {
      return knex.transaction((trx) => {
        const newJob = body.job;

        newJob.companyId = company.id;

        return knex('job')
          .insert(decamelizeKeys(newJob)).transacting(trx)
          .then((job) => {
            return knex('address')
              .insert(decamelizeKeys(body.jobAddress), '*').transacting(trx)
              .then((jobAddress) => {
                const officeAddress = { jobId: job.id, addressId: jobAddress.id };

                return knex('office')
                  .insert(decamelizeKeys(officeAddress), '*').transacting(trx);
              })
          })
          .then(() => {
            return knex(address)
              .insert(decamelizeKeys(body.companyAddress), '*').transacting(trx)
              .then((companyAddress) => {
                const hqAddress = { companyId: company.id, addressId: companyAddress.id };

                return knex('hq')
                  .insert(decamelizeKeys(hqAddress), '*').transacting(trx);
              })
          })
      });
    })
    .catch((err) => {
      next(err);
    });

  knex('job')
    .insert(body.job)
});

module.exports = router;
