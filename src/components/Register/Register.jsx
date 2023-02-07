import { useHistory } from 'react-router-dom';



function Register(){
    const history = useHistory()
    const goBack = () => {
        history.push('/')
    }


    return(<>
            <button>Username</button>
            <button>Password</button>
            <button>Create Account</button>
            <button onClick={goBack}>Back</button>
            </>
    )
}

export default Register