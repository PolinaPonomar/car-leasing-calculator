import React, { useState } from 'react'
import './App.scss'
import RangeSlider from '../RangeSlider/RangeSlider';
import TotalPrice from '../TotalPrice/TotalPrice';
import Button from '../Button/Button';
import { calculateSumOfLeaseAgreement, calculateMonthlyPayment, calculateInitialFee, makeNumberWithSpaces } from '../../utils/utils'

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [carPrice, setCarPrice] = useState(3300000);
  const [initialFeeInPercents, setInitialFeeInPercents] = useState(13);
  const [leasingTerm, setLeasingTerm] = useState(60);

  const initialFee = calculateInitialFee(carPrice, initialFeeInPercents);
  const monthlyPayment = calculateMonthlyPayment(carPrice, initialFee, leasingTerm);
  const sumOfLeaseAgreement = calculateSumOfLeaseAgreement(initialFee, leasingTerm, monthlyPayment);

  const formData = {
    carPrice,
    initialFeeInPercents,
    leasingTerm,
    initialFee,
    monthlyPayment,
    sumOfLeaseAgreement
  }

  const updateLoadingStatus = (value: boolean) => {
    setLoading(value)
  }
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
      <form className="form">
        <h1 className="title">Рассчитайте стоимость автомобиля в лизинг</h1>
        <div className="range-sliders">
          <RangeSlider
            title={'Стоимость автомобиля'}
            minNumber={1000000}
            maxNumber={6000000}
            defaultNumber={3300000}
            unit={'₽'}
            updateData={updateCarPrice}
            isDisabled={isLoading}
          />
          <RangeSlider
            title={'Первоначальный взнос'}
            minNumber={10}
            maxNumber={60}
            defaultNumber={13}
            unit={'%'}
            hasFormula={true}
            updateData={updateInitialFeeInPercents}
            initialFee={initialFee}
            isDisabled={isLoading}
          />
          <RangeSlider
            title={'Срок лизинга'}
            minNumber={1}
            maxNumber={60}
            defaultNumber={60}
            unit={'мес.'}
            updateData={updateLeasingTerm}
            isDisabled={isLoading}
          />
        </div>
        <div className="wrapper">
          <div className="total-prices">
            <TotalPrice
              title={'Сумма договора лизинга'}
              price={makeNumberWithSpaces(sumOfLeaseAgreement)} 
            />
            <TotalPrice
              title={'Ежемесячный платеж от'}
              price={makeNumberWithSpaces(monthlyPayment)}
            />
          </div>
          <Button
            title={'Оставить заявку'}
            formData={formData}
            updateLoadingStatus={updateLoadingStatus}
            isDisabled={true}
          />
        </div>
      </form>
    </main>
  );
};

export default App;
