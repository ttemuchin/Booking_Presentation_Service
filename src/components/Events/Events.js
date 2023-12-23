import './Events.css';
import Card from '../UI/Card';
import EventsFilter from '../Filter/EventFilter';
import React, { useState } from 'react';
import EventList from '../List/EventList';
import EventsDiagram from '../Diagrams/EventsDiagram';

function Events(props) {
  //const [selectedYear, setSelectedYear] = useState('2021');

  // function yearChangeHandler(year) {
  //     setSelectedYear(year);
  // }

  const [selectedMonth, setSelectedMonth] = useState('январь');
  function monthChangeHandler(month) {
    setSelectedMonth(month);
  }

  // const filteredEvents = props.events.map(event => (event.date.toLocaleString("ru-RU",
  //       {month: "long"}) === selectedMonth))

  // console.log(props.event.date.toLocaleString("ru-RU", {month: "long"}))
  const filteredEvents = props.events.filter((event) => {
    return (
      event.date.toLocaleString('ru-RU', { month: 'long' }) === selectedMonth
    );
  });

  // const filteredCosts = props.costs.filter(cost => {
  //   return cost.date.getFullYear().toString() === selectedYear;
  // })
  // карточка - фильтр - диаграмма - список
  return (
    <div>
      <Card className="events">
        <EventsFilter
          month={selectedMonth}
          onChangeMonth={monthChangeHandler}
        />
        <EventsDiagram events={filteredEvents} />
        <EventList events={filteredEvents} />
      </Card>
    </div>
  );
}

export default Events;
