import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function Review() {
    const personName = useSelector(store => store.personName);
    const allPeople = useSelector(store => store.allPeople);
    const activityType = useSelector(store => store.activityType);
    const minutes = useSelector(store => store.minutes);
    const miles = useSelector(store => store.miles);

    const history = useHistory();
    const dispatch = useDispatch();

    const submitData = () => {
        axios.post('/activity', {
            name: personName,
            type: activityType,
            minutes: minutes,
            miles: miles,
        }).then((response) => {
            console.log(response);
            dispatch({type: 'CLEAR_FORM'});
            history.push('/activity-list');
        }).catch((error) => {
            console.log(`Error in POST for submitData ${error}`);
            alert('Something went wrong in submitData.');
        })
    }

    return (
        <>
            <h3>Review</h3>
            <div>
                Name: {personName}<br/>
                Activity Type: {activityType}<br/>
                Minutes: {minutes}<br/>
                Miles: {miles}<br/>
            </div>
            <br/>
            <button onClick={submitData}>Submit</button>
        </>
    )
}

export default Review;