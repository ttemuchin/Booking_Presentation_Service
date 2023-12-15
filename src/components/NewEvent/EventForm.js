import { useState } from 'react';
import './EventForm.css';

const EventForm = (props) => {
    
    const [inputName, setInputName] = useState('');
    const [inputMail, setInputMail] = useState('');
    const [inputDate, setInputDate] = useState('');

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };
    const mailChangeHandler = (event) => {
        setInputMail(event.target.value);

    };
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const eventData = {
            date: new Date(inputDate),
            name: inputName,
            mail: inputMail,
        };
       // console.log(costData);
        props.onSaveEventData(eventData);
        setInputName('');
        setInputMail('');
        setInputDate('');
    };

    return (
    <form onSubmit={submitHandler}>
        <div className="new-event__controls">
            <div className="new-event__control">
                <label>Ваше имя</label>
                <input type="text" value={inputName} onChange={nameChangeHandler}/>
            </div>
            <div className="new-event__control">
                <label>Почта</label>
                <input type="email"
                value={inputMail} onChange={mailChangeHandler}/>
            </div>
            <div className="new-event__control">
                <label>Дата</label>
                <input type="date" min='2023-01-01' step='2024-12-31'
                value={inputDate}//двустороннее связывание 
                onChange={dateChangeHandler}/>
            </div>
            <div className="new-event__actions">
                <button type="submit"> Добавить событие </button>
                <button type='button' onClick={props.onCancel}>Отмена</button>
            </div>
        </div>
    </form>
    );
}

export default EventForm;