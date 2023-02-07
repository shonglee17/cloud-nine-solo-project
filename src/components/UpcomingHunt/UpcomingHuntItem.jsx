import {useHistory} from 'react-router-dom'

function UpcomingHuntItem({data}){
    let huntDate = data.date;
    let dateObj = new Date(huntDate);
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newDate = year + '/' + month + '/' + day;

    const history = useHistory()

    const upcomingHuntDetails = () =>{
      history.push('/upcominghuntdetails')
    }
    return(
        <tbody key={data.id}>
        <tr onClick={upcomingHuntDetails}>
          <td>{newDate}</td>
          <td>{data.species}</td>
          <td>icons go here</td>
        </tr>
      </tbody>
    )
}

export default UpcomingHuntItem