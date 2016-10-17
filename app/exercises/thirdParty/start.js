/**
 * Exercise 2!
 * importing 3rd party modules
 *
 * similar to AMD modules, ES2015 provides syntax to import code.
 *
 * import syntax is described as the following:
 *
 * import <name> from <path>;
 *
 * import: keyword used
 * <name>: name of the library/framework/file to import
 * from: keyword indicating that the path will be next.
 * <path>: path of the file, or single word for library/framework.
 *
 * Example:
 *
 *  import BaseView from 'core/lib/backbone_base_view';
 *
 * Task:
 *  1) Rewrite the jQuery import, so that the it uses es2015 import instead of AMD
 */
var $ = require('jquery');
var colorInBox = require('../colorInBox');

colorInBox($('.two'));

