import React from 'react'
import PickOfTheWeek from './PickOfTheWeek'
import TopPodcast from './TopPodcast'

type Props = {}

const MainSection = () => {
  return (
    <div className='w-full pl-7 pt-8 flex flex-col items-start justify-between ' >
        <h3 className='text-lg text-left flex flex-row mb-4 ml-2' ><img src='/star.svg' className='mr-2' /> Pick of the week</h3>
        <div className='w-full flex flex-row items-stretch justify-between ' >     
            <PickOfTheWeek topPick={{ image: "/pickofweek.png", link: "" }}/>
            <TopPodcast />
        </div>
    </div>
  )
}

export default MainSection