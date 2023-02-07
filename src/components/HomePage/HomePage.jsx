import { useHistory} from 'react-router-dom'
import Head from '../Head/Head'
import Foot from '../Foot/Foot'


function HomePage(){
    const history = useHistory()

    const upcomingHunt = () =>{
        history.push('/upcoming')
    }
    const previousHunt = () =>{
        history.push('/previous')
    }

    const createHunt = () =>{
        history.push('/createhunt')
    }

    return (
        <>
        <div><Head/></div>
        <button onClick={createHunt}>Create A Hunt</button>
        <button onClick={upcomingHunt}>Upcoming Hunt</button>
        <button onClick={previousHunt}>Previous Hunt</button>
        <div><Foot/></div>
        </>
    )
}

export default HomePage