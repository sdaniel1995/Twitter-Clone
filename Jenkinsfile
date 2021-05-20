pipeline {
  agent any 
  tools {nodejs "nodeJS"}

  stages {
      stage("Installing Dependencies") {
          steps {
              sh 'npm install'
          }
      }
  }
}