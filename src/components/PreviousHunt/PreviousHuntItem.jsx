import {useHistory} from 'react-router-dom'

function PreviousHuntItem({data}){
    let huntDate = data.date;
    let dateObj = new Date(huntDate);
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newDate = year + '/' + month + '/' + day;
    console.log(data.species);

    const history = useHistory()

    const previousHuntDetails = () =>{
      history.push(`/previoushuntdetails/${data.id}`)
    }

    return(
        <tbody key={data.id}>
        <tr>
          <td onClick={previousHuntDetails}>{newDate}</td>
          <td onClick={previousHuntDetails}>{data.species}</td>
        </tr>
      </tbody>
    )
}

export default PreviousHuntItem