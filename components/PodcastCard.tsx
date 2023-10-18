import { podcasts } from '@/data/podcasts';
import React from 'react'


interface Podcast {
  podcast: {
    coverImage: string;
    title: string;
    owner: string;
    genre: string;
  }
}
const PodcastCard = ({podcast}: Podcast) => {
  const { title, owner, genre, coverImage } = podcast;

  const trimTitle = (title: string): string => {
    if(title.length > 19){
      let updatedString = title.slice(0, 20).concat(" ...")
      return updatedString
    } 
    return title
  }
  return (
    <div className='w-48 flex flex-col items-start justify-start bg-bg3 text-white p-0.5 pb-4 ' >
      <img src={coverImage} alt="podcast image" className='w-full m-0 p-0 '  />
      <h5 className='pl-2' >{trimTitle(title)}</h5>
      <p className='pl-2  text-xs font-normal mt-3 ' >By: {owner}</p>
      <div className='px-2 mt-auto flex items-center justify-between w-full' >
        <span className='flex items-center justify-between mt-3 ' >
          <img src="/followcollection.svg" alt="" className='' />
          {genre}
        </span>
        <img src="/gifticon.svg" alt="" />
      </div>
    </div>
  )
}

export default PodcastCard