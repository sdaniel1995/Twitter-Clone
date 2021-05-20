pipeline {
  agent any 
  tools {nodejs "nodeJS"}

  stages {
      stage("Clean") {
          steps {
              sh 'rm -r build'
          }
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