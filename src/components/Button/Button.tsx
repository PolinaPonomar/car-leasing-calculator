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
  updateLoadingStatus: Function
  isDisabled: boolean
};

const Button = (props: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const postInfo = async (data: dataTypes) => await fetchInfo(data);

  const handleClick = () => {
    setIsLoading(true);
    props.updateLoadingStatus(true);
    postInfo(props.formData)
      .then((res) => {
        setIsLoading(false);
        props.updateLoadingStatus(false);
        console.log('Done! ', res)
      })
      .catch((err) => {
        setIsLoading(false);
        props.updateLoadingStatus(false);
        console.log('Ошибка: ' + err)
      });
  }

  return (
    <>
    {isLoading ?
      (<button className="button button_loading" type="submit" disabled>
        <div className="button__preloader"></div>
      </button>) :
      (<button className={props.isDisabled ? "button button_disabled" : "button"} type="submit" onClick={handleClick} disabled={props.isDisabled}>{props.title}</button>)
    }
    </>
  );
};

export default Button;
