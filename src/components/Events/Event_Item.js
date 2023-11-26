import './Event_Item.css';
import EventDate from './EventDate';//////
import Card from '../UI/Card';

function Event_Item(props) {

    return (
        <li>
        <Card className='event-item'>
            <EventDate date={props.date}/>
            <div className='event-item__name'>
                <h2>{props.name}</h2>
            </div>
            <div className='event-item__mail'>
                {props.mail}</div>
        </Card>
        </li>
    );  
}

export default Event_Item;