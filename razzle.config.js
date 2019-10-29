'use strict';

const path = require('path');
const srcImportAlias = require('./config-overrides/srcImportAlias');
const importDuplicateComponentName = require('./config-overrides/importDuplicateComponentName');

const paths = {
  appSrc: path.join(__dirname, '/src'),
};

module.exports = {
  modify(config, { target, dev }, webpack) {
    config = srcImportAlias(config, paths);
    config = importDuplicateComponentName(config, paths);
    return config;
  },
};
