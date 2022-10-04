import React, { useState }  from 'react'
import './Button.scss'
import { fetchInfo } from '../../services/api';

type dataTypes = {
  carPrice: number
  initialFeeInPercents: number
  leasingTerm: number
  initialFee: number
  monthlyPayment: number
  sumOfLeaseAgreement: number
}; 

type ButtonProps = {
  title: string
  formData: dataTypes
};

const Button = (props: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const postInfo = async (data: dataTypes) => await fetchInfo(data);

  const handleClick = () => {
    setIsLoading(true);
    postInfo(props.formData)
      .then((res) => {
        setIsLoading(false);
        setIsPressed(true);
        console.log('Done!')
      })
      .catch((err) => {
        setIsLoading(false);
        setIsPressed(true);
        console.log('Ошибка: ' + err)
      });
  }

  return (
    <>
    {isLoading ?
      (<button className="button button_loading" type="submit" disabled>
        <div className="button__preloader"></div>
      </button>) :
      (<button className={isPressed ? "button button_pressed" : "button"} type="submit" onClick={handleClick}>{props.title}</button>)
    }
    </>
  );
};

export default Button;
