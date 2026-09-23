pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test -- --ci'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t smartcart:%BUILD_NUMBER% .'
            }
        }
    }
}