import React, { useState }  from 'react'
import './App.scss'
import RangeSlider from '../RangeSlider/RangeSlider';

const App = () => {
  
  return (
    <main className="page">
      <h1 className="title">Рассчитайте стоимость автомобиля в лизинг</h1>
      <div className="range-sliders">
        <RangeSlider title={'Стоимость автомобиля'} minNumber={1000000} maxNumber={6000000} defaultNumber={3300000} unit={'₽'}/>
        <RangeSlider title={'Первоначальный взнос'} minNumber={10} maxNumber={60} defaultNumber={13} unit={'%'}/>
        <RangeSlider title={'Срок лизинга'} minNumber={1} maxNumber={60} defaultNumber={60} unit={'мес.'}/>
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
    </main>
  );
};

export default App;
