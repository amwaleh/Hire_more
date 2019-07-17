const path = require('path')
const { createConfig, babel, postcss } = require('webpack-blocks')
const ignoreFiles = [
  '**/__tests__/**',
  '**/*.test.{js,jsx,ts,tsx}',
  '**/*.spec.{js,jsx,ts,tsx}',
  '**/*.d.ts',
  '**/ThemeWrapper.js',
]

module.exports = {
  pagePerSection: true,
  sections: [
    {
      name: 'Simple Components',
      description: 'The most simple components. Don\'t call actions or functions',
      components: 'src/devpool-components/simple-components/**/[A-Z]*.js',
    },
  ],
  webpackConfig: createConfig([babel(), postcss()]),
  assetsDir: 'src/',
  ignore: ignoreFiles,
}
