import React, { useState }  from 'react'
import './RangeSlider.scss'
import { calculateColorTrackOfRangeInput } from '../../utils/utils'

type RangeSliderProps = {
  title: string
  minNumber: number
  maxNumber: number
  defaultNumber: number
  unit: string
}; 

const RangeSlider = (props: RangeSliderProps) => {
  const [number, setNumber] = useState(props.defaultNumber);
  const rangeInputCssRules = {backgroundSize: calculateColorTrackOfRangeInput(number, props.minNumber, props.maxNumber)}
  
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value))
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
        <div className="range-slider__number-wrapper">
          <input 
            className="range-slider__number"
            type="number"
            min={props.minNumber}
            max={props.maxNumber}
            value={String(number)}
            onChange={handleNumberChange}
            onMouseLeave={checkNumber}
            onKeyDown={handleEnterDown}
          >
          </input>
          <p className="range-slider__unit">{props.unit}</p>
        </div>
        <input
          className="range-slider__slider"
          type="range"
          style={rangeInputCssRules}
          min={props.minNumber}
          max={props.maxNumber}
          value={number}
          onChange={handleNumberChange}
        >
        </input>
        {/* <p>{number}</p> */}
      </div>
    </div>
  );
};

export default RangeSlider;