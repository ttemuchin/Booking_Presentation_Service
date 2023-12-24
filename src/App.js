import Events from './components/Events/Events';
import NewEvent from './components/NewEvent/NewEvent';
import React, { useEffect, useState } from 'react';
import Form1 from './components/Registration/Form1';
import { bookingAPI } from './API/api';
import './header.css';

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

  function changePage(reservation, form1) {
    setForm(reservation)
    setReserv(form1)
  }

  const [events, setEvents] = useState(INITIAL_EVENTS);
  useEffect(apiRequest, [])
  const [data, setData] = useState("")


  const [reserv, setReserv] = useState(true)
  // const [reserv1, setReserv1] = useState(true)
  const [form, setForm] = useState(false)
  debugger
  return (
    <div>
      <div className="border">
        <h2>Система бронирования</h2>
        <button onClick={() => changePage(reserv, form)}>change</button>
      </div>
      
      <NewEvent reservAvailable={reserv} onAddEvent={addEventHandler} />
      <Events reservAvailable={reserv} events={events} />
      <Form1 formAvailable={form}/>
      {/* <Events events={data} /> */}
    </div>
  );
}

export default App;
