import {React,useState} from "react"

function Profile(){
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    return(
        <>
        {isLoggedIn? <h1>Welcome User</h1>:<h1>Welcome Guest</h1>}
        </>
    )
}
export default Profile
//this will help us to check whether the user is loggedIn or not example of ternary opeator