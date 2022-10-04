import React, { useState } from 'react'
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
  isDisabled: boolean
};

const RangeSlider = (props: RangeSliderProps) => {
  const [isNumberChangingByTextInput, setIsNumberChangingByTextInput] = useState(false);
  const [number, setNumber] = useState(makeNumberWithSpaces(props.defaultNumber));
  const rangeInputCssRules = { backgroundSize: calculateColorTrackOfRangeInput(makeNumberfromString(number), props.minNumber, props.maxNumber) }

  const handleTextInputClick = () => {
    setIsNumberChangingByTextInput(true)
  }

  const handleNumberChangeByTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(makeNumberfromString(event.target.value))) {
      setNumber(makeNumberWithSpaces(makeNumberfromString(event.target.value)))
      if(makeNumberfromString(event.target.value) >= props.minNumber && makeNumberfromString(event.target.value) <=  props.maxNumber) {
        props.updateData(makeNumberfromString(event.target.value))
      } 
    }
  }

  const handleNumberChangeByRangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(typeof event.target.value);
    setNumber(makeNumberWithSpaces(makeNumberfromString(event.target.value)))
    props.updateData(makeNumberfromString(event.target.value))
  }

  const checkNumber = () => {
    if (makeNumberfromString(number) < props.minNumber) {
      setNumber(makeNumberWithSpaces(props.minNumber))
      props.updateData(props.minNumber)
    } else if (makeNumberfromString(number) > props.maxNumber) {
      setNumber(makeNumberWithSpaces(props.maxNumber))
      props.updateData(props.maxNumber)
    }
  }

  const handleMouseLeave = () => {
    checkNumber()
    setIsNumberChangingByTextInput(false)
  }

  const handleEnterDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      checkNumber()
      setIsNumberChangingByTextInput(false)
    }
  }

  return (
    <div className={props.isDisabled ? "range-slider range-slider_disabled" : "range-slider"}>
      <p className="range-slider__title">{props.title}</p>
      <div className={
        (props.hasFormula && isNumberChangingByTextInput) ? "range-slider__body range-slider__body_with-accent range-slider__body_active" :
        props.hasFormula ? "range-slider__body range-slider__body_with-accent" :
        isNumberChangingByTextInput ? "range-slider__body range-slider__body_active" : "range-slider__body"
      }>
        <div className="range-slider__number-wrapper">
          {props.hasFormula ?
            (<>
              <p className="range-slider__number">{makeNumberWithSpaces(props.initialFee)} &#8381;</p>
              <div className="range-slider__accent">
                <input
                  className="range-slider__number-in-accent"
                  type="text"
                  value={number}
                  onClick={handleTextInputClick}
                  onChange={handleNumberChangeByTextInput}
                  onMouseLeave={handleMouseLeave}
                  onKeyDown={handleEnterDown}
                  disabled={props.isDisabled}
                >
                </input>
                <p className="range-slider__unit-in-accent">{props.unit}</p>
              </div>
            </>) :
            (<>
              <input
                className="range-slider__number"
                type="text"
                value={number}
                onClick={handleTextInputClick}
                onChange={handleNumberChangeByTextInput}
                onMouseLeave={handleMouseLeave}
                onKeyDown={handleEnterDown}
                disabled={props.isDisabled}
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
          value={makeNumberfromString(number)}
          onChange={handleNumberChangeByRangeInput}
          disabled={props.isDisabled}
        >
        </input>
      </div>
    </div>
  );
};

export default RangeSlider;
