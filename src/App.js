import Events from "./components/Events/Events";
import NewEvent from "./components/NewEvent/NewEvent";
import React, { useState } from "react";
import './header.css';
//массив данных для отображения
const INITIAL_EVENTS = [
  {
    id: "c1",
    date: new Date(2023, 0, 4),
    name: "Bartholomew Henry Allen",
    mail: "flash@gmail.com",
  },
  {
    id: "c2",
    date: new Date(2023, 0, 23),
    name: "Oliver Jonas Queen",
    mail: "arrow@gmail.com",
  },
  {
    id: "c3",
    date: new Date(2023, 0, 12),
    name: "Cara Danvers",
    mail: "supergirl@gmail.com",
  },
];

function App() {
  const [events, setEvents] = useState(INITIAL_EVENTS);

  // при добавлении нового спред всех предыдущих
  function addEventHandler(event) {
    setEvents((prevEvents) => {
      return [event, ...prevEvents];
    });
    //console.log(cost);
    //console.log('APP');
  }

  return (
    <div>
      <div class="border">
          <h2>Система бронирования</h2>
      </div>    
      {/* объект добавления */}
      <NewEvent onAddEvent={addEventHandler} />
      {/* поле где отображаются данные массива */}
      <Events events={events} />
    </div>
  );
}

export default App;
//основа реакта - компоненты. но в html коде страницы они не
// отображаются. реакт переписывает все по своему

//Стрелочная функция характерна для js
//const CostItem = (props) => {}
