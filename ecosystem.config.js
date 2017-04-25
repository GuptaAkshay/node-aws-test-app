module.exports = {
  apps: [{
    name: 'node-test-app',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-66-19-95.ap-south-1.compute.amazonaws.com',
      key: 'D:/softwares/AWS/PEM/node-test-app.pem',
      ref: 'origin/master',
      repo: 'git@github.com:GuptaAkshay/node-aws-test-app.git',
      path: '/home/ubuntu/node-test-app',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}