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
        <h1>list item</h1>
        <h1>list item</h1>
        <h1>list item</h1>
        <h1>list item</h1>
        <h1>list item</h1>
        <h1>list item</h1>
        <h1>list item</h1>
        
        <button onClick={donezo}>DAS ALL WE GOT FOE TODAY</button>
        </div>
    )
}

export default Used