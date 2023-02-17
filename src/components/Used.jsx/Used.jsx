import NavHead from "../NavHead/NavHead"
import Footer from "../Footer/Footer"
import { useHistory} from 'react-router-dom'
import './Used.css'


function Used(){
    const history = useHistory()
    const homeButton = () => {
        history.push('/')
    }

    return(
        <div className = "used">
        <h1>Tools Used</h1>
        <h5>- React</h5>
        <h5>- node.js</h5>
        <h5>- express</h5>
        <h5>- mdbootstrap</h5>
        <h5>- Postgres SQL</h5>
        <h5>- Git</h5>
        <h5>- Redux / Saga</h5>
        <h5>- Postman</h5>
        <br></br>
        <br></br>
        <h4>www.linkedin.com/shonglee17</h4>
        <br></br>
        <h1>Thank You !</h1>
        
        <button className="usedButton" onClick={homeButton}>Home</button>
        </div>
    )
}

export default Used