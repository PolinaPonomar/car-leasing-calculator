import React, { useState }  from 'react'
import './RangeSlider.scss'

type RangeSliderProps = {
  title: string
  minNumber: number 
  maxNumber: number
  defaultNumber: number
}; 

const RangeSlider = (props: RangeSliderProps) => {
  const [number, setNumber] = useState(props.defaultNumber);
  
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = Number(event.target.value);
      setNumber(number)
  }

  const checkNumber = () => {
    if(number < props.minNumber) {
      setNumber(props.minNumber)
    } else if (number > props.maxNumber) {
      setNumber(props.maxNumber)
    }
  }

  const handleEnterDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key == 'Enter' ) {
      checkNumber()
    } 
  }
  
  return (
    <div className="range-slider">
      <p className="range-slider__title">{props.title}</p>
      <div className="range-slider__body">
        <input className="range-slider__number" type="number" value={number} onChange={handleNumberChange} onMouseLeave={checkNumber} onKeyDown={handleEnterDown}></input>
        <input className="range-slider__slider" type="range" min={props.minNumber} max={props.maxNumber} defaultValue={number} value={number} onChange={handleNumberChange}></input>
        {/* <p>{number}</p> */}
      </div>
    </div>
  );
};

export default RangeSlider;