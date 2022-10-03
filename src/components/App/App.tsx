import React, { useState }  from 'react'
import './App.scss'
import RangeSlider from '../RangeSlider/RangeSlider';

const App = () => {
  const [carPrice, setCarPrice] = useState(3300000);
  const [initialFeeInPercents, setInitialFeeInPercents] = useState(13);
  const [leasingTerm, setLeasingTerm] = useState(60);

  const updateCarPrice = (value: number) => {
    setCarPrice(value)
  };
  const updateInitialFeeInPercents = (value: number) => {
    setInitialFeeInPercents(value)
  };
  const updateLeasingTerm = (value: number) => {
    setLeasingTerm(value)
  };

  return (
    <main className="page">
      <h1 className="title">Рассчитайте стоимость автомобиля в лизинг</h1>
      <div className="range-sliders">
        <RangeSlider title={'Стоимость автомобиля'} minNumber={1000000} maxNumber={6000000} defaultNumber={3300000} unit={'₽'} updateData={updateCarPrice}/>
        <RangeSlider title={'Первоначальный взнос'} minNumber={10} maxNumber={60} defaultNumber={13} unit={'%'} hasFormula={true} updateData={updateInitialFeeInPercents} carPrice={carPrice}/>
        <RangeSlider title={'Срок лизинга'} minNumber={1} maxNumber={60} defaultNumber={60} unit={'мес.'} updateData={updateLeasingTerm}/>
      </div>
      <div className="total-prices">
        <div className="total-price">
          <p className="total-price__title">Сумма договора лизинга</p>
          <p className="total-price__number"></p>
        </div>
        <div className="total-price">
          <p className="total-price__title">Ежемесячный платеж от</p>
          <p className="total-price__number"></p>
        </div>
      </div>
      <button className="button">Оставить заявку</button>
      <p>{carPrice}</p>
      <p>{initialFeeInPercents}</p>
      <p>{leasingTerm}</p>
    </main>
  );
};

export default App;
