import "./EventFilter.css";

const EventsFilter = (props) => {
  const monthChangeHandler = (event) => {
    props.onChangeMonth(event.target.value);
  };
  // нужен фильтр по месяцам
  return (
    <div className="events-filter">
      <div className="events-filter__control">
        <label>Выбор По Месяцам</label>
        <select value={props.month} onChange={monthChangeHandler}>
          <option value="январь">январь</option>
          <option value="февраль">февраль</option>
          <option value="март">март</option>
          <option value="апрель">апрель</option>
          <option value="май">май</option>
          <option value="июнь">июнь</option>
          <option value="июль">июль</option>
          <option value="август">август</option>
          <option value="сентябрь">сентябрь</option>
          <option value="октябрь">октябрь</option>
          <option value="ноябрь">ноябрь</option>
          <option value="декабрь">декабрь</option>
        </select>
      </div>
    </div>
  );
};

export default EventsFilter;
