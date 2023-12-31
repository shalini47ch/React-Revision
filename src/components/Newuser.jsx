//create this function to use the function from the parent component that is use the function from App.js to here

function NewUser(props){
    return(
        <>
        <h1>Hello I am a new user</h1>
        <button onClick={props.data}>I am using the function as props</button>
        </>
    )
}
export default NewUser