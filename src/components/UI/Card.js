import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}
// здесь главная карточка получается
export default Card;
