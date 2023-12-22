import Diagram from "./Diagram";

const EventsDiagram = (props) => {
  // const diagramDataSets = [
  //     {label: 'Jan', value: 0},
  //     {label: 'Feb', value: 0},
  //     {label: 'Mar', value: 0},
  //     {label: 'Apr', value: 0},
  //     {label: 'May', value: 0},
  //     {label: 'Jun', value: 0},
  //     {label: 'Jul', value: 0},
  //     {label: 'Aug', value: 0},
  //     {label: 'Sep', value: 0},
  //     {label: 'Oct', value: 0},
  //     {label: 'Nov', value: 0},
  //     {label: 'Dec', value: 0},
  // ]
  const diagramDataSets = [
    { label: "01", value: 0 },
    { label: "02", value: 0 },
    { label: "03", value: 0 },
    { label: "04", value: 0 },
    { label: "05", value: 0 },
    { label: "06", value: 0 },
    { label: "07", value: 0 },
    { label: "08", value: 0 },
    { label: "09", value: 0 },
    { label: "10", value: 0 },
    { label: "11", value: 0 },
    { label: "12", value: 0 },
    { label: "13", value: 0 },
    { label: "14", value: 0 },
    { label: "15", value: 0 },
    { label: "16", value: 0 },
    { label: "17", value: 0 },
    { label: "18", value: 0 },
    { label: "19", value: 0 },
    { label: "20", value: 0 },
    { label: "21", value: 0 },
    { label: "22", value: 0 },
    { label: "23", value: 0 },
    { label: "24", value: 0 },
    { label: "25", value: 0 },
    { label: "26", value: 0 },
    { label: "27", value: 0 },
    { label: "28", value: 0 },
    { label: "29", value: 0 },
    { label: "30", value: 0 },
  ];

  for (const event of props.events) {
    const eventDay = event.date.toLocaleString("ru-RU", { day: "2-digit" });
    // const eventDay = event.date.getDate().toString().padStart(2, "0")
    if (event.mail !== null) {
      diagramDataSets[parseInt(eventDay) - 1].value += 1;
    }
  }

  return <Diagram dataSets={diagramDataSets} />;
};

export default EventsDiagram;
