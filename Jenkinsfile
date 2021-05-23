pipeline {
  agent any 
  tools {nodejs "nodeJS"}

  stages {
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
      stage("Deploy") {
          steps {
              sh 'npm run-script deploy'
          }
      }
  }
}