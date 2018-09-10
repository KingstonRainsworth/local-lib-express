var Book = require('../models/books');
var Author = require('../models/authors');
var Genre = require('../models/genres');
var BookInstance = require ('../models/bookinstances');

var async = require('async');

exports.index = function(req, res) {

    async.parallel({
      book_count: function(callback) {
        Book.countDocuments({},callback); //pass empty object to count all
      },

      book_instance_count: function(callback) {
        BookInstance.countDocuments({},callback); //pass empty object to count all
      },

      book_instance_avai_count: function(callback) {
        BookInstance.countDocuments({status:'Available'},callback); //pass empty object to count all
      },

      author_count: function(callback) {
        Author.countDocuments({},callback); //pass empty object to count all
      },

      genre_count: function(callback) {
        Genre.countDocuments({}, callback);
      },
    }, function(err, result) {
      res.render('index', {title: 'Local Library Home', error: err, data:result });
    });
};

// Display list of all books.
exports.book_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Book list');
};

// Display detail page for a specific book.
exports.book_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Display book create form on GET.
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};
