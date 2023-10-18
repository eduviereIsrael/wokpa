import React from 'react'

type Props = {
    
    topPick: {
        image: string,
        link: string,
    }
}

const PickOfTheWeek = ({topPick}: Props) => {
    const { image, link } = topPick

    const handleListenNow = (): void => {
        // sends user to the page of the podcast using link or any other required parameters
    }
  return (
    <div className='w-5/12 relative p-0' >
        <img src={image} alt="top pick" className='w-full -m-2'  />
        <div className='w-full absolute h-full top-0 flex flex-row justify-end items-end' >
        <button className='my-5 mr-9 py-3 px-5 text-white text-base font-bold rounded-full flex flex-row items-center ' style={{ backgroundColor: "#7B61FF" }} >Listen now <img className='ml-2'  src="/play.svg" alt="play button" /> </button>
        </div>
    </div>
  )
}

export default PickOfTheWeek