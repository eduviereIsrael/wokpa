import React from 'react'

type Props = {
    callBack: (value: boolean) => void;
    option: string;
    icon: string;
}

const SignUpOptionsButton = ({callBack, option, icon}: Props) => {
  return (
    <button onClick={(e) => callBack(true)} className='flex flex-row items-center justify-between w-80 h-14 bg-white text-black rounded-full pl-3 pr-8' >
        <span className='flex flex-row items-center justify-between' >
            <span className='mr-4 w-9 h-9 flex items-center justify-center rounded-full' style={{backgroundColor: "#EDE6E5"}} >
                <img src={icon} alt={option} />
            </span>
            <p className='text-sm' >{option}</p>
        </span>
        <img src="/arrow-right.svg" alt="" />
    </button>
  )
}

export default SignUpOptionsButton