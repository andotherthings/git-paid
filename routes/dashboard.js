const router = require('express').Router();
const knex = require('../knex.js');
const { camelizeKeys, decamelizeKeys } = require('humps');
const auth = require('../utils/authentication');

router.get('*', auth, (req, res, next) => {
  const { userId } = req.token;

  knex('application')
    .where('user_id', userId)
    .then(rawApps => {
      const applications = camelizeKeys(rawApps);

      Promise.all(applications.map(app => {
        return knex('job')
          .where('id', app.jobId)
          .first()
          .then(rawJob => {
            const job = camelizeKeys(rawJob);

            return knex('company')
              .where('id', job.companyId)
              .first()
              .then(rawComp => {
                const company = camelizeKeys(rawComp);

                return knex('industry')
                  .innerJoin('job', 'job.id', 'industry.job_id')
                  .innerJoin('tag', 'tag.id', 'industry.tag_id')
                  .where('industry.job_id', job.id)
                  .then(rawTags => {
                    const tags = camelizeKeys(rawTags).map(e => e.name);

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
