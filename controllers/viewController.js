module.exports = {

  show404(err, req, res, next) {
    res.sendStatus(404);
  },
  show406(err, req, res, next) {
    res.sendStatus(406);
  },
  showShows(req, res) {
    res.render('shows/show-index', {
      shows: res.locals.shows,
    });
  },
  showOne(req, res) {
    res.render('shows/show-single', {
      show: res.locals.show,
    });
  },
  showAddForm(req, res) {
    res.render('shows/show-add');
  },
  showEditForm(req, res) {
    res.render('shows/show-edit', {
      show: res.locals.show,
    });
  },
  handleCreate(req, res) {
    res.redirect('/shows');
  },
  handleUpdate(req, res) {
    res.redirect(`/shows/${req.params.id}`);
  },
  handleDelete(req, res) {
    res.redirect('/shows');
  },
};
