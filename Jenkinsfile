pipeline {
  agent any 
  tools {nodeJS "node"}

  stages {
      stage("Installing Dependencies") {
          steps {
              sh 'npm install'
          }
      }
  }
}