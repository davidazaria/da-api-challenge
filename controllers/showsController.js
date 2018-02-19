const showDB = require('../models/showDB');

module.exports = {

  makeBlankShow(req, res, next) {
    const blankShow = {
      id:         null,
      title:    null,
      description:     null,
      duration_minutes: null,
      air_date: null,
      rating: null,
      keywords: null,
    };
    res.locals.show = blankShow;
    next();
  },

  index(req, res, next) {
    showDB.findAll()
      .then((shows) => {
        res.locals.shows = shows;
        next();
      })
      .catch(err => next(err));
  },

  getOne(req, res, next) {
    showDB.findById(req.params.id)
      .then((show) => {
        res.locals.show = show;
        next();
      })
      .catch(err => next(err));
  },

  create(req, res, next) {
    console.log(req.body, 'body');
    showDB.save(req.body)
      .then((show) => {
        res.locals.show = show;
        next();
      })
      .catch(err => next(err));
  },

  update(req, res, next) {
    console.log(req.body, 'update controller');
    showDB.update(req.body)
      .then((show) => {
        res.locals.show = show;
        next();
      })
      .catch(err => next(err));
  },

  destroy(req, res, next) {
    showDB.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },
};
