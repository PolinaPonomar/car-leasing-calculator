import React, { useState }  from 'react'
import './RangeSlider.scss'
import { calculateColorTrackOfRangeInput, calculateInitialFee } from '../../utils/utils'

type RangeSliderProps = {
  title: string
  minNumber: number
  maxNumber: number
  defaultNumber: number
  unit: string
  hasFormula?: boolean
  initialFee?: number
  updateData: Function
}; 

const RangeSlider = (props: RangeSliderProps) => {
  const [number, setNumber] = useState(props.defaultNumber);
  const rangeInputCssRules = {backgroundSize: calculateColorTrackOfRangeInput(number, props.minNumber, props.maxNumber)}
  
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value))
    props.updateData(Number(event.target.value))
  }

  const checkNumber = () => {
    if(number < props.minNumber) {
      setNumber(props.minNumber)
      props.updateData(props.minNumber)
    } else if (number > props.maxNumber) {
      setNumber(props.maxNumber)
      props.updateData(props.maxNumber)
    }
  }

  const handleEnterDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key == 'Enter' ) {
      checkNumber()
    } 
  }
  // редач css - 1час DONE
  // штука с кусочком + формула - 2 часа DONE

  // две итогн суммы + кнопка -2 часа
  // отображение чисел с разбивкой - 1час
  // состояния - 2 часа
  // отправка на бэк - 2 часа
  // рефакторинг - 1 час
  // на гитхаб пейджес -1 час
  // добавиь миксины? range-slider__body_for-formula
  return (
    <div className="range-slider">
      <p className="range-slider__title">{props.title}</p>
      <div className={props.hasFormula ? "range-slider__body range-slider__body_for-formula" : "range-slider__body"}>
        <div className="range-slider__number-wrapper">
        {props.hasFormula ?
          (<>
            {/* <p className="range-slider__number">{calculateInitialFee(props.carPrice, number)} &#8381;</p> */}
            <p className="range-slider__number">{props.initialFee} &#8381;</p>
            <div className="range-slider__number-for-formula">
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
          </>) :
          (<>
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
          </>)
        }
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