pipeline {
  agent any 
  tools {nodejs "node"}

  stages {
      stage("Installing Dependencies") {
          steps {
              sh 'npm install'
          }
      }
  }
}