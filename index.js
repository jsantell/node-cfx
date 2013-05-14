var spawn = require('child_process').spawn;
var _ = require('underscore');

var ARG_MAP = {
  // cfx run 
  'binary': '--binary',
  'extras': '--extra-packages',
  'config': '--use-config',
  'profile': '--profiledir',
  'pkgdir': '--pkgdir',
  'static': '--static-args',
  'app': '--app',
  // cfx test
  'filter': '--filter',
  'repeat': '--times',
  // cfx xpi
  'updateUrl': '--update-url',
  'updateLink': '--update-link'
}

exports.docs = function (){};
exports.init = function (){};

exports.run = function (dir, options) {
  return execute(dir, 'run', optionsToArgs(options));
};

exports.test = function (dir, options) {
  return execute(dir, 'test', optionsToArgs(options));
};

exports.testall = function (dir, options) {
  return execute(dir, 'testall', optionsToArgs(options));
};

function execute (dir, command, options) {
  var proc = spawn('cfx', [].concat(command).concat(options), {
    cwd: dir
  });
}

function optionsToArgs (options) {
  return _.reduce(options, function (mem, key) {
    return ARG_MAP[key] + ' ' + options[key] + ' ';
  }, '');
}
