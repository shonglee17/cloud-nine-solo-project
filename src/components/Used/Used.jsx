import NavHead from "../NavHead/NavHead"
import Footer from "../Footer/Footer"
import { useHistory} from 'react-router-dom'
import './Used.css'


function Used(){
    const history = useHistory()
    const donezo = () => {
        history.push('/')
    }

    return(
        <div className = "used">
        <h1>*These are the tools and libraries I used (write out the components no need to read them out loud)</h1>
        <br></br>
        <h1>*Thank the MVP'z</h1>
        <br></br>
        <h1>*Plug the Linked In</h1>
        <h5>www.linkedin.com/shonglee17</h5>
        <br></br>
        <h1>*Introduce the next presenter</h1>
        <button onClick={donezo}>Skdattle</button>
        </div>
    )
}

export default Used