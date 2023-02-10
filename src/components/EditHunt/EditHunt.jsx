import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function EditHunt(){

    const params = useParams();
    const dispatch = useDispatch();
    const huntToEdit = useSelector((store) => store.huntToEdit);
    const history = useHistory();

    useEffect(()=>{
        console.log('this is params', params.id);
    }, [] )

    return(
        <div>Hi Shong!</div>
    )
}

export default EditHunt

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////


function EditStudentForm() {


  useEffect(() => {
    // Yell at a Saga function to fetch data
    // for the student we are editing!
    console.log('params.id should work, let us make sure!', params.id)
    dispatch({
      type: 'FETCH_STUDENT_TO_EDIT',
      payload: params.id
    })
  }, [])

  const handleGitHubNameChange = (evt) => {
    dispatch({
      type: 'SET_GITHUB_NAME',
      payload: evt.target.value
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'UPDATE_STUDENT',
      payload: studentToEdit
    })
    history.push('/');
  }

  return (
    <div>
      <h2>Edit Student:</h2>

      <form>
        <input 
          type="text"
          // This next line is saying, "Use the studentToEdit.github_name
          // value if it exists OR use an empty string."
          value={studentToEdit.github_name || ''}
          onChange={handleGitHubNameChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

