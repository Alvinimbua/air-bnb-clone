import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';
import data from './data'

function App() {
   

   const cardElements = data.map(data => {
     return <Card 
                  key={data.id}
                  {...data}
                  />

   })
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <section className="cards-list">
            {cardElements}
        </section>
    </div>
  );
}

export default App;
