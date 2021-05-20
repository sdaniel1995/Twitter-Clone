pipeline {
  agent any 
   environment {
        CI = 'true' 
    }
  stages {
      stage("Installing Dependencies") {
          steps {
              sh 'npm install'
              sh 'npm --version'
          }
      }
  }
}