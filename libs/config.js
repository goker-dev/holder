var nconf = require('nconf');
//
nconf.argv()
    .env()
    .file({ file: process.env.CONFIG || './config.js' });

module.exports = nconf;