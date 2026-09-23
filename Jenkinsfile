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
                bat '"C:\\Users\\manas\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe" build -t smartcart:%BUILD_NUMBER% .'
            }
        }
    }
}