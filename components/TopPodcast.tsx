import React, {useState} from 'react'
import PodcastCard from './PodcastCard'
import { podcasts } from '@/data/podcasts';

type Props = {}

const TopPodcast = (props: Props) => {
  
  interface Podcast {
    coverImage: string;
    title: string;
    owner: string;
    genre: string;
    id: string
}

const [PodcastDisplayed, setPodcastsDisplayed] = useState<Podcast[]>(podcasts)



function moveArrayElement<T>(
  arr: T[],
  direction: "left" | "right",
  setPodcastsDisplayed: React.Dispatch<React.SetStateAction<T[]>>
): T[] {
  const copiedArray: T[] = [...arr]; // Create a copy of the original array

  if (direction === "left") {
    const [firstElement, ...rest] = copiedArray;
    const rearrangedArray = [...rest, firstElement];
    setPodcastsDisplayed(rearrangedArray); // Assuming you have a setState function
    return rearrangedArray;
  } else if (direction === "right") {
    const lastElement = copiedArray.pop();
    if (lastElement !== undefined) {
      copiedArray.unshift(lastElement);
    }
    setPodcastsDisplayed(copiedArray); // Assuming you have a setState function
    return copiedArray;
  } else {
    // Handle invalid direction
    return copiedArray;
  }
}


// Example usage:
// const originalArray: number[] = [1, 2, 3, 4, 5];
// const direction: "left" = "left";
// const newArray: number[] = moveArrayElement(originalArray, direction);
// console.log(newArray);


  const [renderedWidth, setRenderedWidth] = useState<number>(0)
  return (
    <div className=' w-7/12  flex flex-col items-start justify-between rounded-lg ' >
        <div className="scroll-control w-full pr-7 flex flex-row items-center justify-between">
            <h4>Top podcasts</h4>
            <button className='bg-transparent text-brand-color text-xs' >See all</button>
        </div>
        <div className='controller flex items-center space-x-5' >
          <div className='flex flex-row space-x-2 ' >
            <div className='h-1.5 w-1.5 bg-gray-text cursor-pointer rounded-full' ></div>
            <div className='h-1.5 w-1.5 bg-gray-text cursor-pointer rounded-full' ></div>
            <div className='h-1.5 w-1.5 bg-gray-text cursor-pointer rounded-full' ></div>
            <div className='h-1.5 w-1.5 bg-gray-text cursor-pointer rounded-full' ></div>
            <div className='h-1.5 w-1.5 bg-gray-text cursor-pointer rounded-full' ></div>
            <div className='h-1.5 w-1.5 bg-gray-text cursor-pointer rounded-full' ></div>
            <div className='h-1.5 w-1.5 bg-gray-text cursor-pointer rounded-full' ></div>
            <div className='h-1.5 w-1.5 bg-gray-text cursor-pointer rounded-full' ></div>
     
          </div>
          <div className='flex flex-row items-center ml-3 space-x-3' >
            <img src="/arrowright.svg" alt="" className=' cursor-pointer w-2 rotate-180' onClick={() => moveArrayElement(PodcastDisplayed, "left" , setPodcastsDisplayed)}  />
            <img src="/arrowright.svg" alt="" className=" cursor-pointer w-2 " onClick={() => moveArrayElement(PodcastDisplayed, "right" , setPodcastsDisplayed)}  />
          </div>
        </div>

        <div className='podcasts flex flex-row justify-start items-start space-x-4' >
          {
            PodcastDisplayed.map((podcast) => (
              <PodcastCard podcast = {podcast} key={podcast.id} />
            ))
          }
        </div>
    </div>
  )
}

export default TopPodcast