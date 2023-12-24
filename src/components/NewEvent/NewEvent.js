import './NewEvent.css';
import './EventForm.css';
// import EventForm from "./EventForm";
import { useState } from 'react';
import { bookingAPI } from '../../API/api';

const NewEvent = (props) => {
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
    SaveEventDataHandler(eventData);
    setInputName('');
    setInputMail('');
    setInputDate('');
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

  const SaveEventDataHandler = (inputEventData) => {
    const eventData = {
      ...inputEventData,
      id: Math.random().toString(),
    };
    setIsFormVisible(false);
    props.onAddEvent(eventData);
  };

  const inputEventHandler = () => {
    setIsFormVisible(true);
  };
  const cancelEventHandler = () => {
    setIsFormVisible(false);
  };

  const apiRequest = () => {
    bookingAPI.bookingApi(inputMail, inputName, inputDate).then((data) => {
      // debugger;
      console.log(data);
      // alert(data);
    });
  };

  return (
    <div className="new-event">
      {!isFormVisible && (
        <button onClick={inputEventHandler}>Add new event</button>
      )}
      {isFormVisible && (
        // <EventForm
        //   onSaveEventData={SaveEventDataHandler}
        //   onCancel={cancelEventHandler}
        // />
        <form onSubmit={submitHandler}>
          <div className="new-event__controls">
            <div className="new-event__control">
              <label>Ваше имя</label>
              <input
                type="text"
                value={inputName}
                onChange={nameChangeHandler}
              />
            </div>
            <div className="new-event__control">
              <label>Почта</label>
              <input
                type="email"
                value={inputMail}
                onChange={mailChangeHandler}
              />
            </div>
            <div className="new-event__control">
              <label>Дата</label>
              <input
                type="date"
                min="2023-01-01"
                step="2024-12-31"
                value={inputDate} //двустороннее связывание
                onChange={dateChangeHandler}
              />
            </div>
            <div className="new-event__actions">
              <button onClick={apiRequest} type="submit">
                {' '}
                Добавить событие{' '}
              </button>
              <button type="button" onClick={cancelEventHandler}>
                Отмена
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewEvent;
