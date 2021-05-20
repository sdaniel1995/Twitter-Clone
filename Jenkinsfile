pipeline {
  agent any 
  tools {nodejs "nodejs"}
  stages {
      stage("Installing Dependencies") {
          steps {
              sh 'npm install'
              sh 'npm --version'
          }
      }
  }
}