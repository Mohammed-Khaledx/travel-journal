import "./App.css";
import Header from "./components/header";
import Card from "./components/card";
import data from "./data"

function App() {
  let cards = data.map(info => {
    return <Card 
    key={info.id} 
    info = {info}/>
  })
  return (
    <>
      <Header />
      <div className="main">
        {cards}
      </div>
    </>
  );
}

export default App;
