import React, { use, useEffect, useState } from "react";
import SignUpOptionsButton from "./SignUpOptionsButton";
import InputTag from "./InputTags";

interface SignUpData{
  [key: string]: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  gender: string;
  address: string;
  password: string;
  password_confirmation: string;

}

interface Props {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>> ;
    formData: SignUpData;
    setFormData: React.Dispatch<React.SetStateAction<SignUpData>>;
    handleSignUp: (e: React.FormEvent) => void
}

const SignUpModal = ({showModal, setShowModal, formData, setFormData, handleSignUp }: Props) => {
  
  const [ gmailSignUp, setGmailSignUp ] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };




  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-screen"
          >
            <div className="relative w-full mt-20 mx-auto max-w-5xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex  flex-col w-full bg-black text-white outline-none focus:outline-none w-6/6">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t">
                  <button
                    className=" ml-auto  border-0 text-black  float-right mt-3 mr-3  leading-none outline-none focus:outline-none"
                    onClick={ gmailSignUp? () => setGmailSignUp(false) : () => setShowModal(false)}
                  >
                   <img src="/cancel.svg" alt="close signUp" />
                  </button>
                </div>
                {/*body*/}
                {
                  !gmailSignUp?
                  <div className="relative p-14 pt-12 flex-auto w-full flex flex-row items-center justify-between">
                    <div className="form-div flex-col flex items-center" >
                      <h3 className="mb-5  " >Create an account</h3>
                      <div className="signup-options space-y-3" >
                          <SignUpOptionsButton callBack={() => {}} option="Continue with google" icon="/google.svg"  />
                          <SignUpOptionsButton callBack={() => {}} option="Continue with facebook" icon="/facebook.svg"  />
                          <SignUpOptionsButton callBack={() => {}} option="Continue with apple ID" icon="/apple.svg"  />
                          <SignUpOptionsButton callBack={(value) => {setGmailSignUp(value)}} option="Create account with your email" icon="/email.svg"  />
                      </div>
                    </div>
                    <div className=" w-3/6" >
                      <div className="w-full" >
                          <img src="/signup-img.png" alt="signup image" className="w-full" />
                      </div>
                      <h2 style={{ color: "#7B61FF" }} className="text-center text-2xl font-bold leading-7" >Join a community of podcast <br/> lovers and creators</h2>
                    </div>
                  </div>
                   :
                   <div className="relative p-14 pt-12 flex-auto w-full flex flex-col items-center justify-between">
                    <h2 onClick={() => setGmailSignUp(false)}  className="mb-5" >Sign Up with gmail</h2>
                    <form onSubmit={handleSignUp} className="grid grid-cols-2 gap-4 w-full text-black">
                      <div className="col-span-1">
                    
                        <InputTag
                          type="text"
                          name="first_name"
                          id="first_name"
                          className="mt-1 p-2 border rounded-md w-full"
                          value={formData.first_name}
                          callBack={handleInputChange}
                          placeholder="enter your first name"
                        />
                      </div>

                      <div className="col-span-1">
                     
                        <InputTag
                          type="text"
                          name="last_name"
                          id="last_name"
                          className="mt-1 p-2 border rounded-md w-full"
                          value={formData.last_name}
                          callBack={handleInputChange}
                          placeholder="enter your last name"

                        />
                      </div>

                      <div className="col-span-1">
                       
                        <InputTag
                          type="email"
                          name="email"
                          id="email"
                          className="mt-1 p-2 border rounded-md w-full"
                          value={formData.email}
                          callBack={handleInputChange}
                          placeholder="enter your email"

                        />
                      </div>

                      <div className="col-span-1">
                       
                        <InputTag
                          type="tel"
                          name="phone"
                          id="phone"
                          className="mt-1 p-2 border rounded-md w-full"
                          value={formData.phone}
                          callBack={handleInputChange}
                          placeholder="enter your phone number"

                        />
                      </div>

                      <div className="col-span-1">
                     
                        <InputTag
                          type="text"
                          name="country"
                          id="country"
                          className="mt-1 p-2 border rounded-md w-full"
                          value={formData.country}
                          callBack={handleInputChange}
                          placeholder="enter your country"
                        />
                      </div>

                      <div className="col-span-1">
                       
                        <InputTag
                          type="text"
                          name="state"
                          id="state"
                          className="mt-1 p-2 border rounded-md w-full"
                          value={formData.state}
                          callBack={handleInputChange}
                          placeholder="enter your state"

                        />
                      </div>

                      <div className="col-span-1">
                     
                        <InputTag
                          type="text"
                          name="address"
                          id="address"
                          className="mt-1 p-2 border rounded-md w-full"
                          value={formData.address}
                          callBack={handleInputChange}
                          placeholder="enter your address"

                        />
                      </div>

                      <div className="col-span-1">
                    
                        <select
                          name="gender"
                          id="gender"
                          className="mt-1 p-2 w-full bg-transparent text-white border-2 border-solid-white flex flex-row items-center justify-between w-full h-14  rounded-full pl-3 pr-8"
                          value={formData.gender}
                          onChange={handleInputChange}
                          required={true}
                          defaultValue={"Male"}
                        >
                          <option  className="p-2 bg-white text-black"  value="MALE">Male</option>
                          <option  className="p-2 bg-white text-black" value="FEMALE">Female</option>
                        </select>
                      </div>

                      <div className="col-span-1">
                        
                        <InputTag
                          type="password"
                          name="password"
                          id="password"
                          className="mt-1 p-2 border rounded-md w-full"
                          value={formData.password}
                          callBack={handleInputChange}
                          placeholder="0000"
                        />
                      </div>

                      <div className="col-span-1">
                        <InputTag
                          type="password"
                          name="password_confirmation"
                          id="password_confirmation"
                          className="mt-1 p-2 border rounded-md w-full"
                          value={formData.password_confirmation}
                          callBack={handleInputChange}
                          placeholder='0000'
                        />
                      </div>

                      
                      <button className="col-span-2 bg-white text-black py-3 px-7 font-bold h-14 bg-white text-black rounded-full" type="submit" >Sign up</button>
                    </form>
                   </div>
                }
                
 
              </div>
            </div>
          </div>
          {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
        </>
      ) : null}
    </>
  );
}
export default SignUpModal