pipeline {
  agent any 
  stages {
      stage("Install Dependencies") {
          steps {
              sh 'npm install'
              echo 'npm --version'
            }
      }

      stage("Build") {
          steps {
              sh 'npm run-script build'
          }
      }
  }
}