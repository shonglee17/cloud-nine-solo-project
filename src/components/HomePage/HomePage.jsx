import { useHistory} from 'react-router-dom'



function HomePage(){
    const history = useHistory()
    const upcomingHunt = () =>{
        history.push('/upcoming')
    }
    const previousHunt = () =>{
        history.push('/previous')
    }

    return (
        <>
        <button >Create A Hunt</button>
        <button onClick={upcomingHunt}>Upcoming Hunt</button>
        <button onClick={previousHunt}>Previous Hunt</button>
        </>
    )
}

export default HomePage