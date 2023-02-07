import { useHistory } from 'react-router-dom';



function Register(){
    const history = useHistory()
    const goBack = () => {
        history.push('/')
    }

    const homePage = () => {
        history.push('/home')
    }

    return(<>
            <button>Username</button>
            <button>Password</button>
            <button onClick={homePage}>Create Account</button>
            <button onClick={goBack}>Back</button>
            </>
    )
}

export default Register