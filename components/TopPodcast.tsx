import React from 'react'
import PodcastCard from './PodcastCard'
import { podcasts } from '@/data/podcasts';

type Props = {}

const TopPodcast = (props: Props) => {
  return (
    <div className=' flex-grow flex flex-col items-start justify-between ' >
        <div className="scroll-control w-full pr-7 border-2 border-solid-white flex flex-row items-center justify-between">
            <h4>Top podcasts</h4>
            <button className='bg-transparent text-brand-color' >See all</button>
        </div>
        <div className='controller' >

        </div>

        <div className='podcasts flex flex-row justify-start items-start space-x-4' >
          {
            podcasts.map((podcast) => (
              <PodcastCard podcast = {podcast} key={podcast.title} />
            ))
          }
        </div>
    </div>
  )
}

export default TopPodcast