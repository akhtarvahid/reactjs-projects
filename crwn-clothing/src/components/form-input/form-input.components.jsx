import React from 'react'
import './form-input.styles.scss';

const FormInput = ({ label, ...restProps }) => {
  return (
    <div className='group'>
        <input className='form-input' {...restProps}/>
        <label className={`${
            restProps.value.length ? 'shrink' :''
            } form-input-label`}
            >
            {label}
        </label> 
    </div>
  )
}
export default FormInput;