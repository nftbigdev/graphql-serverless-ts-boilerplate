import convict from 'convict';

const config = convict({
  env: {
    format: ['prod', 'dev', 'test'],
    default: 'dev',
    arg: 'nodeEnv',
    env: 'NODE_ENV',
  },
  someConfig: {
    format: String,
    default: 'someConfig',
    arg: 'someConfig',
    env: 'SOME_CONFIG',
  },
  awsSecret: {
    format: String,
    default: 'default awsSecret',
    arg: 'awsSecret',
    env: 'AWS_SECRET',
  },
});

const env = config.get('env');
config.loadFile(`src/config/env/${env}.json`);
config.validate({ allowed: 'strict' });

export default config;
