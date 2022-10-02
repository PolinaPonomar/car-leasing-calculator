import React, { useState }  from 'react'
import './App.scss'

const App = () => {
  const [price, setPrice] = useState(3300000);
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value))
  }
  
  return (
    <main className="page">
      <h1 className="title">Рассчитайте стоимость автомобиля в лизинг</h1>
      <div className="range-sliders">
        <div className="range-slider">
          <p className="range-slider__title"></p>
          <div className="range-slider__body">
            <input className="range-slider__price" type="number" id="rangeValue"></input>
            <input className="range-slider__slider" type="range" min="1000000" max="6000000" defaultValue={price} onChange={handleNumberChange}></input>
            <p>{price}</p>
          </div>
        </div>
        <div className="range-slider"></div>
        <div className="range-slider"></div>
      </div>
    </main>
  );
};

export default App;
