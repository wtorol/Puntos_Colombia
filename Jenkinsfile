pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/wtorol/Puntos_Colombia.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key c5e62f8d-a438-4480-b2b6-810776791b4e --browser chrome --spec cypress/e2e  --parallel'
                         

                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/wtorol/Puntos_Colombia.gitt'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key c5e62f8d-a438-4480-b2b6-810776791b4e --browser chrome --spec cypress/e2e  --parallel'
                        
                    }
                }
                stage('Slave 3') {
                    agent {
                        label "Agent2_3"
                    }
                    steps {
                        git url: 'https://github.com/wtorol/Puntos_Colombia.gitt'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key c5e62f8d-a438-4480-b2b6-810776791b4e --browser chrome --spec cypress/e2e  --parallel'
                        
                    }
                }
                
               

                
   
                  
            }

             
        }

    }
            
}