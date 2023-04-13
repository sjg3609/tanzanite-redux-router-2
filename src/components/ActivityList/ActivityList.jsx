import { useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

function ActivityList() {

    const dispatch = useDispatch();
    const activities = useSelector(store => store.activities);

    const fetchActivityList = () => {
        axios.get('/activity').then((response) => {
            console.log(response);
            dispatch({ type: 'SET_ACTIVITY_LIST', payload: response.data});
        }).catch((error) => {
            console.log(`Error in GET, ${error}`);
            alert('Something went wrong in GET');
        })
    }

    useEffect(() => {
        fetchActivityList();
    }, []);

    return (
        <>
            <h3>Activity List</h3>
            <hr/>
                {
                    activities.map(activity => (
                        <div key={activity.id}>
                            <p>Name: {activity.name}</p>
                            <p>Type: {activity.type}</p>
                            <p>Minutes: {activity.minutes}</p>
                            <p>Miles: {activity.miles}</p>
                            <hr/>
                        </div>
                    ))
                }
        </>
    )
}

export default ActivityList;