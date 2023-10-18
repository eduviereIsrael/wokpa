import { platform } from 'os';
import React from 'react'

interface InputProps {
    type: string; // Type of the input, e.g., "text"
    name: string; // Name attribute for the input
    id: string; // ID attribute for the input
    value: string; // Value for the input
    className: string
    callBack: (event: React.ChangeEvent<HTMLInputElement>) => void; // Event handler for input changes
    placeholder: string;
  }

const InputTag = ({type, name, id, value, callBack, placeholder }: InputProps) => {
  return (
    <input required={true} placeholder={placeholder} type={type} name={name} id={id} value={value} onChange={(e) => callBack(e)} className='bg-transparent text-white border-2 border-solid-white flex flex-row items-center text-xs justify-between w-full h-14  rounded-full pl-3 pr-8' />
    
  )
}

export default InputTag