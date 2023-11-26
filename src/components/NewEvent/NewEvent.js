import './NewEvent.css';
import EventForm from './EventForm';
import { useState } from 'react';

const NewEvent = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const SaveEventDataHandler = (inputEventData) => {
        const eventData = {
            ...inputEventData,
            id: Math.random().toString()
        };
        setIsFormVisible(false);
        props.onAddEvent(eventData);
    };

    const inputEventHandler = () => {
        setIsFormVisible(true);
    }
    const cancelEventHandler = () => {
        setIsFormVisible(false);
    }
    

    return (<div className='new-event'>
        {!isFormVisible && <button onClick=
        {inputEventHandler}>Add new event</button>}
        {isFormVisible && <EventForm onSaveEventData=
        {SaveEventDataHandler} 
        onCancel={cancelEventHandler}/>}
    </div>
    );
};

export default NewEvent;