import Events from './components/Events/Events';
import NewEvent from './components/NewEvent/NewEvent';
import React, { useEffect, useState } from 'react';
import { bookingAPI } from './API/api';
import './header.css';
//массив данных для отображения

const INITIAL_EVENTS = [
  {
    id: 'c1',
    date: new Date(2023, 0, 4),
    name: 'Bartholomew Henry Allen',
    mail: 'flash@gmail.com',
  },
  {
    id: 'c2',
    date: new Date(2023, 0, 23),
    name: 'Oliver Jonas Queen',
    mail: 'arrow@gmail.com',
  },
  {
    id: 'c3',
    date: new Date(2023, 0, 12),
    name: 'Cara Danvers',
    mail: 'supergirl@gmail.com',
  },
];

function App() {
  const apiRequest = () => {
    bookingAPI.bookingApi2().then((dataFrom) => {
      alert(dataFrom.data)
      const arr = [{
        id: 'c1',
        date: new Date(2023, 0, 4),
        name: 'Bartholomew Henry Allen',
        mail: 'flash@gmail.com',
      },
      {
        id: 'c2',
        date: new Date(2023, 0, 23),
        name: 'Oliver Jonas Queen',
        mail: 'arrow@gmail.com',
      },
      {
        id: 'c3',
        date: new Date(2023, 0, 12),
        name: 'Cara Danvers',
        mail: 'supergirl@gmail.com',
      },
    ]
      // for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
      //   alert(i);
      // }
      setData(arr)
    })
    .catch((error) => {
      console.log(error);
    })
  };
  
  function addEventHandler(event) {
    setEvents((prevEvents) => {
      return [event, ...prevEvents];
    });
  }

  const [events, setEvents] = useState(INITIAL_EVENTS);
  useEffect(apiRequest, [])
  const [data, setData] = useState("")

  return (
    <div>
      <div className="border">
        <h2>Система бронирования</h2>
      </div>
      <NewEvent onAddEvent={addEventHandler} />
      <Events events={events} />
      {/* <Events events={data} /> */}

    </div>
  );
}

export default App;

//основа реакта - компоненты. но в html коде страницы они не
// отображаются. реакт переписывает все по своему

//Стрелочная функция характерна для js
//const CostItem = (props) => {}
