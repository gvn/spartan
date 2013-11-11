var jadeTemplates = require('jadeTemplates');
var $ = require('jquery');

$('body').append(jadeTemplates['hello-world']());
