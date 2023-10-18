import React from 'react'
import { mainMenuItems } from "@/data/menuItems"
import Link from 'next/link'
import MenuLink from './MenuLink'

type Props = {}

const SideNav = (props: Props) => {
  return (
    <div className={`flex flex-col items-stretch w-6/6`} style={{ backgroundColor: "#303030" }}  >
        <div className="logo mt-1 ml-4 mb-7">
            <img src='/WokpaLogo.svg' alt='WokpaLogo'  />
        </div>
        <div className='main flex flex-col items-stretch w-6/6' >
            {
                mainMenuItems.map((menuitem) => (
                    // <p key={name} >
                    //     {/* <Link href={menuItem.link} > */}
                    //     <span>
                    //         <img src={icon} alt={name} />
                    //     </span>
                    //     <p>{name}</p>
                    //     {/* </Link> */}
                    // </p>
                    <MenuLink key={menuitem.name} menuItem={menuitem} />
                ))
            }
        </div>
        <p>Hello</p>
        <p>Hello</p>
    </div>
  )
}

export default SideNav