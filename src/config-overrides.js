// config-overrides.js
const { addWebpackAlias, override } = require('customize-cra');

module.exports = override(
  // Adiciona um fallback para o módulo vm usando vm-browserify
  addWebpackAlias({
    'vm': 'vm-browserify'
  })
);
