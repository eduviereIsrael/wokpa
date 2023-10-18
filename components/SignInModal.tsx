import React, { useEffect } from 'react'
import SignUpOptionsButton from './SignUpOptionsButton';
import InputTag from './InputTags';

interface SignInData{
    [key: string]: string;
    email: string;
    password: string;
  }

interface Props {
    showModal : boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>> ;
    handleSignIn: (e: React.FormEvent) => void;
    signInData: SignInData;
    setSignInData: React.Dispatch<React.SetStateAction<SignInData>>

}

const SignInModal = ({showModal, setShowModal, handleSignIn, signInData, setSignInData}: Props) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSignInData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };  

    // useEffect(() => {
    //     console.log(signInData)
    //   }, [signInData])
    
  return (
    <>
    {
        showModal && <div
        className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-screen"
      >
        <div className="relative w-full mt-20 mx-auto max-w-5xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex  flex-col w-full bg-black text-white outline-none focus:outline-none w-6/6">
            {/*header*/}
            <div className="flex items-start justify-between rounded-t">
              <button
                className=" ml-auto  border-0 text-black  float-right mt-3 mr-3  leading-none outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
               <img src="/cancel.svg" alt="close signUp" />
              </button>
            </div>
            {/*body*/}
            {
              
              <div className="relative p-14 pt-12 flex-auto w-full flex flex-row items-center justify-between">
              <div className="form-div flex-col flex items-center" >
                <h3 className="mb-5  " >Create an account</h3>
                <div className="signup-options space-y-3" >
                    <SignUpOptionsButton callBack={() => {}} option="Choose account" icon="/google.svg"  />
                </div>
                <form onSubmit={handleSignIn} className='flex flex-col items-center mt-7 w-full space-y-2' >
                    <h5 className='mb-3' >Log in with email.</h5>
                    <InputTag 
                        type='email'
                        name='email'
                        id='email'
                        value={signInData.email}
                        className='mt-1 p-2 border rounded-md w-full'
                        placeholder='enter your email'
                        callBack={handleInputChange}
                    />
                    <InputTag 
                        type='password'
                        name='password'
                        id='password'
                        value={signInData.password}
                        className='mt-3 p-2 border rounded-md w-full'
                        placeholder='enter your password'
                        callBack={handleInputChange}
                    />
                    <div className='flex flex-row items-center justify-between w-full' >
                        <button type='submit' className='col-span-2 bg-brand-color2 px-7 font-bold py-3  text-white rounded-full self-start' >Log in</button>
                        <p className='text-white text-xs font-light ' >forgot password?</p>
                    </div>
                    
                </form>
              </div>
              <div className=" w-3/6" >
                <div className="w-full" >
                    <img src="/signup-img.png" alt="signup image" className="w-full" />
                </div>
                <h2 style={{ color: "#7B61FF" }} className="text-center text-2xl font-bold leading-7" >Join a community of podcast <br/> lovers and creators</h2>
              </div>
            </div>
            }
            
    
          </div>
        </div>
      </div>
    }
    </>
    
  )
}

export default SignInModal