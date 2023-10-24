let common = [
  'src/Test/Features/**/*.feature', // Specify our feature files
  '--require-module ts-node/register', // Load TypeScript module
  '--require-module tsconfig-paths/register', // Rewrite paths
  '--require src/Test/Steps/**/*.ts', // Load step definitions
  '--format progress', // Load custom formatter
].join(' ');

module.exports = {
  default: common,
};
