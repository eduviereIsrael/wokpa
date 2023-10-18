import React, { useEffect } from 'react'




interface Props {
  setShowSignUpModal: React.Dispatch<React.SetStateAction<boolean>> ;
  setShowSignInModal: React.Dispatch<React.SetStateAction<boolean>> ;
  handleSignUp: (event: React.MouseEvent<HTMLButtonElement>) => void;
  userFirstName: string
}

const TopNavbar = ({setShowSignUpModal, setShowSignInModal, userFirstName}: Props) => {

  useEffect(() => {
    console.log(userFirstName)
  }, [userFirstName])
  return (
    <div className="navbar flex flex-row items-center justify-between py-4 px-7 ">
        <div className="searchInput border-solid border border-white w-2/5 flex flex-row items-center justify-between bg-white h-11 py-2.5 px-5 rounded-xl ">
        <input placeholder='Search by Podcast Name, Host name, Categories, Tags...' className='flex-grow text-sm' />
        <img src="/search-icon.svg" alt="search" />
        </div>
        <div className="nav-buttons w-3/6 flex flex-row items-center justify-end space-x-8">
        <button className='whitespace-no-wrap flex flex-row items-center bg-black text-white py-3 px-4 rounded-2xl' style={{ boxShadow: '0px 0px 4px 2px rgba(30, 174, 163, 0.50)' }} >
            <img className='mr-0.5' src="/download-app.svg" alt="" />
            Download the app
        </button>
        {
          !userFirstName? <div className='user-auth flex flex-row items-center space-x-2' >
          <button onClick={() => {setShowSignUpModal(true)}} className='whitespace-no-wrap flex flex-row items-center py-3 px-4 rounded-xl text-white bg-brand-color ' >
          <img className='mr-0.5' src="/sign-up.svg" alt="" />
          SIGN UP
          </button>
          <button onClick={() => setShowSignInModal(true)} className='whitespace-no-wrap flex flex-row items-center py-3 px-4 rounded-xl text-white border-2 border-solid border-white '  >
          <img className='mr-0.5' src="/log-in.svg" alt="" />
          LOG IN
          </button>
          </div>
          :
          <button onClick={() => sessionStorage.clear()} className='whitespace-no-wrap flex flex-row items-center bg-black text-white py-3 px-4 rounded-3xl'>
              <span className='h-7 w-7 rounded-full bg-brand-color mr-4 ' >{userFirstName[0].toUpperCase()}</span>
              {userFirstName}
              <img src="/3dots.svg" alt="" className='ml-7' />
          </button>
        }
        {/* <div className='user-auth flex flex-row items-center space-x-2' >
            <button onClick={() => {setShowSignUpModal(true)}} className='whitespace-no-wrap flex flex-row items-center py-3 px-4 rounded-xl text-white bg-brand-color ' >
            <img className='mr-0.5' src="/sign-up.svg" alt="" />
            SIGN UP
            </button>
            <button onClick={() => setShowSignInModal(true)} className='whitespace-no-wrap flex flex-row items-center py-3 px-4 rounded-xl text-white border-2 border-solid border-white '  >
            <img className='mr-0.5' src="/log-in.svg" alt="" />
            LOG IN
            </button>
        </div> */}
        </div>
    </div>
  )
}

export default TopNavbar