import React, { useState }  from 'react'
import './RangeSlider.scss'
import { calculateColorTrackOfRangeInput, makeNumberWithSpaces, makeNumberfromString } from '../../utils/utils'

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
    // setNumber(makeNumberfromString(event.target.value))
    // props.updateData(makeNumberfromString(event.target.value))
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
  // две итогн суммы + кнопка -2 часа DONE
  // медиа запросы - 2 часа DONE
  // отправка на бэк - 2 часа - DONE

   // состояния - 2 часа - сделала только кнопку  и то не без дезайблед

  // отображение чисел с разбивкой - 1час ТУТ краевые проблемы, вернись к ним позже (чтобы тут не было Nan если чел пытается ввести текст и т.д.)
  // 13 проц и знак рубля

  // добавиь миксины?

  
  // рефакторинг - 1 час
  // на гитхаб пейджес -1 час
  
  return (
    <div className="range-slider">
      <p className="range-slider__title">{props.title}</p>
      <div className={props.hasFormula ? "range-slider__body range-slider__body_with-accent" : "range-slider__body"}>
        <div className="range-slider__number-wrapper">
        {props.hasFormula ?
          (<>
            <p className="range-slider__number">{makeNumberWithSpaces(props.initialFee)} &#8381;</p>
            <div className="range-slider__accent">
            <input
                className="range-slider__number-in-accent"
                // type="text"
                // value={makeNumberWithSpaces(number)}
                type="number"
                min={props.minNumber}
                max={props.maxNumber}
                value={String(number)}

                onChange={handleNumberChange}
                onMouseLeave={checkNumber}
                onKeyDown={handleEnterDown}
              >
              </input>
              <p className="range-slider__unit-in-accent">{props.unit}</p>
            </div>
          </>) :
          (<>
            <input 
              className="range-slider__number"
              // type="text"
              // value={makeNumberWithSpaces(number)}
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
      </div>
    </div>
  );
};

export default RangeSlider;