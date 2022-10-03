import React, { useState }  from 'react'
import './TotalPrice.scss'

type TotalPriceProps = {
  title: string
  price: number
}; 

const TotalPrice = (props: TotalPriceProps) => {
  return (
    <div className="total-price">
      <p className="total-price__title">{props.title}</p>
      <p className="total-price__number">{props.price} &#8381;</p>
    </div>
  );
};

export default TotalPrice;
