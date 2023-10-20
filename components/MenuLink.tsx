import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

interface Props  {

    menuItem: {
        name: string;
        icon: string;
        link: string    
    }
}

const MenuLink = ({menuItem}: Props) => {
    const { name, link, icon } = menuItem
    const [activeLink, setActiveLink] = useState<string | null>(null)
    const router = useRouter()

    const handleClick = ():void => {
        router.push(link)
    }
  return (
    <div 
        onClick={handleClick}
        className={` flex flex-row items-center py-2 px-4 cursor-pointer w-6/6 `} 
        onMouseEnter={() => setActiveLink(name)} 
        onMouseLeave={() => setActiveLink(null)} 
        style={{ background: activeLink === name? 'linear-gradient(91deg, rgba(217, 217, 217, 0.61) -3.62%, rgba(217, 217, 217, 0.00) 123.06%)' : '' }}
        >
        <span className='p-1.5 rounded-lg' style={{backgroundColor: '#3A3A3A'}} >
            <img src={icon} alt={name} />
        </span>
        <p className={`ml-1.5 text-white text-base   `} >{name}</p>
    </div>
  )
}

export default MenuLink