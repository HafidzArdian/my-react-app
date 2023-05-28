import Input from './Input'
import Label from './Label';
import React from 'react'

const InputForm = (props) => {
    const {label,name,type,placeholder} = props;
  return (
    <div className='mb-3'>
        <Label htmlFor={name}>{label}</Label>
        <Input  name={name} type={type} placeholder={placeholder}/>
    </div>
  )
}

export default InputForm;