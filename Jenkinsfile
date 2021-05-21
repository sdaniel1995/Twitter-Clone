pipeline {
  agent any 
  tools {nodejs "nodeJS"}

  stages {
      stage("Clean") {
          sh 'rm -rf node_modules/'
          sh 'rm -f package.json'
      }
      stage("Installing Dependencies") {
          steps {
              sh 'npm install'
          }
      }
      stage("Build") {
          steps {
              sh 'npm run-script build'
          }
      }
  }
}