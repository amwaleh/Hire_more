//
// Babel loader cache needs to be cleaned on changes to the .env files:
// rm -rf ./node_modules/.cache/babel-loader/
//
console.log('ENVCONF');
const fs = require('fs');
const dotenv = require('dotenv');

const buildEnv = process.env.BUILD_ENV || 'local';
let envConfig = [];

console.log('BUILD_ENV', buildEnv);

try {
  envConfig = dotenv.parse(fs.readFileSync(`.env.${buildEnv}`));
} catch (error) {
  // No environment config, ignore
}

for (var key in envConfig) {
  if (!process.env[key]) {
    process.env[key] = envConfig[key];
  }
}

dotenv.config();

const keys = Object.keys(process.env).filter(
  key => key.indexOf('REACT_APP_') === 0
);
let config = {};

keys.forEach(key => {
  config[`process.env.${key}`] = process.env[key];
});

console.log('config', config);

module.exports = config;
