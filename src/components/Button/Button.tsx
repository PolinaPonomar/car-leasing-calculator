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
  const [isLoading, setIsLoading] = useState(false);
  const postInfo = async (data: dataTypes) => await fetchInfo(data);

  const handleClick = () => {
    setIsLoading(true);
    postInfo(props.formData)
      .then((res) => {
        setIsLoading(false);
        console.log('Done! ', res)
      })
      .catch((err) => {
        setIsLoading(false);
        console.log('Ошибка: ' + err)
      });
  }

  return (
    <>
    {isLoading ?
      (<button className="button button_loading" type="submit" disabled>
        <div className="button__preloader"></div>
      </button>) :
      (<button className="button" type="submit" onClick={handleClick}>{props.title}</button>)
    }
    </>
  );
};

export default Button;
