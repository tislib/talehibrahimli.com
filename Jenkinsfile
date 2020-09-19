pipeline {
    agent any

    stages {
        stage('SCM') {
            steps {
                checkout scm
            }
        }
        stage('Npm install') {
            steps {
                sh "npm install"
            }
        }
        stage('Build') {
            steps {
                sh "npm run build"
            }
        }
        stage('Build Image') {
            steps {
                sh "eval \$(cat /var/lib/jenkins/.docker/env.sh); docker build . -t hub.tisserv.net/talehibrahimlicom:v${env.BUILD_NUMBER}"
            }
        }
        stage('Push Image') {
            steps {
                sh "eval \$(cat /var/lib/jenkins/.docker/env.sh); docker push hub.tisserv.net/talehibrahimlicom:v${env.BUILD_NUMBER}"
            }
        }
        stage('Run Docker') {
            steps {
                sh "eval \$(cat /var/lib/jenkins/.docker/env.sh); docker kill talehibrahimlicom || true"
                sh "eval \$(cat /var/lib/jenkins/.docker/env.sh); docker rm talehibrahimlicom || true"
                sh "eval \$(cat /var/lib/jenkins/.docker/env.sh); docker run -d --name talehibrahimlicom -p 8201:8080 hub.tisserv.net/talehibrahimlicom:v${env.BUILD_NUMBER}"
            }
        }
    }
}
