import React from 'react'
import Layout from '@/components/Layout'
import PickOfTheWeek from '@/components/PickOfTheWeek'
import TopPodcast from '@/components/TopPodcast'

type Props = {}

const DiscoverComponent = (props: Props) => {
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

export const Discover = Layout(DiscoverComponent)