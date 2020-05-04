import gql from 'graphql-tag'

export default gql`
mutation AddUser($username: String, $password: String, $description: String, $time_zone: String,
  $email: String, $goal: String, $name: String){
    addUser(username:$username, password:$password, description:$description,
    time_zone:$time_zone, email:$email, goal:$goal, name:$name){
      id
      username
    }
  }  
`