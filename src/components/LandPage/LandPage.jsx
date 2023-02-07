import { useHistory } from 'react-router-dom';



function LandPage(){
    const history = useHistory()

    const registerPage = () => {
        history.push('/register')
    }

    const homePage = () =>{
        history.push('/home')
    }


    return (
        <>
            <button>Username</button>
            <button>Password</button>
            <button onClick={homePage}>Login</button>
            <button onClick={registerPage}>Sign Up/Register</button>
        </>
    )
}

export default LandPage