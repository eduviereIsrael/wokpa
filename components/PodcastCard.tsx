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
    <div className='w-52 flex flex-col items-start justify-start bg-bg3 text-white   ' >
      <img src={coverImage} alt="podcast image" className='w-full -m-0.5' />
      <h5>{trimTitle(title)}</h5>
      <p>By: {owner}</p>
      <div>
        <span>
          <img src="/followcollection.svg" alt="" />
          {genre}
        </span>
        <img src="/gifticon.svg" alt="" />
      </div>
    </div>
  )
}

export default PodcastCard