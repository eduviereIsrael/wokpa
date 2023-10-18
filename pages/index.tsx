import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios';
import querystring from "querystring"

const inter = Inter({ subsets: ['latin'] })
import React, {FC, useEffect, useState} from 'react';
import SideNav from '@/components/SIdeNav';
import SignUpModal from '@/components/SignUpModal';
import TopNavbar from '@/components/TopNavbar';
import MainSection from '@/components/MainSection';
import SignInModal from '@/components/SignInModal';

const Home: FC = () => {

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

  interface SignInData{
    [key: string]: string;
    email: string;
    password: string;
  }

  interface UserData {
    created_at: string;
    email: string;
    email_verified_at: string | null;
    first_name: string;
    id: number | null;
    last_name: string;
    phone: string;
    role: {
      id: number | null;
      name: string;
      created_at: string;
      updated_at: string;
    };
    role_id: number;
    updated_at: string;
  }

  const initialSignInData: SignInData = {
    email: '',
    password: '',
  };

  const initialSignUpData: SignUpData = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    gender: '',
    address: '',
    password: '',
    password_confirmation: '',
  };

  const initialUserData: UserData = {
    created_at: '',
    email: '',
    email_verified_at: null,
    first_name: '',
    id: null,
    last_name: '',
    phone: '',
    role: {
      id: null,
      name: '',
      created_at: '',
      updated_at: '',
    },
    role_id: 0,
    updated_at: '',
  };
  



  const [userSignUpData, setUserSignUpData] = useState<SignUpData>(initialSignUpData);
  const [userSignInData, setUserSignInData] = useState<SignInData>(initialSignInData);
  const [signUpModal, setSignUpModal] = useState< boolean >(false)
  const [signInModal, setSignInModal] = useState< boolean >(false)
  const [signInLoading, setSignInLoading] = useState< boolean >(false)
  const [userData, setUserData] = useState<UserData>(initialUserData)
  const [token, setToken] = useState<string | null>('')
  const [podcasts, setPodcasts] = useState<any>()
  
  const handleSignUp = (e: React.FormEvent): void => {
    e.preventDefault();
    
    // Define the data you want to send.
    // console.log("working")
   if(userSignUpData.password == userSignUpData.password_confirmation){
    // console.log("password check complete")
    try{ 
    const postData = new URLSearchParams();
    const Keys = Object.keys(userSignUpData)
    Keys.forEach((key) => {
      const value = userSignUpData[key];
      postData.append(key, value)
    })
    
    // Define the URL and headers.
    const url = 'https://wokpa.ddns.net/api/listeners/register';
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    
    // Send the POST request using Axios.
    axios.post(url, postData, { headers })
      .then(response => {
        // Handle the response here.
        console.log(response.data); // You can access the response data.
      })
      .catch(error => {
        // Handle errors here.
        console.error(error);
      });}
    catch(error){
      console.log(error)
    }}
  }

  const updateUserData = (key: keyof SignUpData, value: string) => {
    setUserSignUpData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSignIn = (e: React.FormEvent): void => {
    e.preventDefault();
    try{
      const postData = new URLSearchParams();
      const Keys = Object.keys(userSignInData)
      Keys.forEach((key) => {
        const value = userSignInData[key];
        postData.append(key, value)
      })

      const url = 'https://wokpa.ddns.net/api/listeners/login';
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      };

      axios.post(url, postData, { headers })
      .then(response => {
        // Handle the response here.
        console.log(response.data); // You can access the response data.
        setUserData({...response.data.data?.user})
        setToken(response.data.data?.token)
        sessionStorage.setItem("token", response.data.data?.token)
        sessionStorage.setItem("user", JSON.stringify(response.data.data?.user))
      })
      .catch(error => {
        // Handle errors here.
        console.error(error);
      })

    }catch(error){
      console.log(error)
    }

  }

  useEffect(() => {
    const tokenInStorage = sessionStorage.getItem("token")
    if(tokenInStorage){
      setToken(tokenInStorage)
    }
  }, [])

  useEffect(() => {
    const UserInStorage = sessionStorage.getItem("user")

    let parsedUserData: UserData | null = null;

    if (UserInStorage !== null) {
      try {
        parsedUserData = JSON.parse(UserInStorage);
        setUserData(parsedUserData as UserData)
      } catch (error) {
        console.error('Error parsing userData:', error);
      }
    }
    if(UserInStorage){
      setToken(UserInStorage)
    }
  }, [])

  // useEffect(() => {
  //   if(token){
  //     const url = "https://wokpa.ddns.net/api/listeners/podcasts/subscriptions"
  //     const headers = {
  //       'Authorization': token, // Example: Add an Authorization header
  //     };
  //     axios.get(url, {
  //       headers: headers
  //     })
  //     .then(response => {
  //       // Handle the response here.
  //       console.log(response); // You can access the response data.

  //     })
  //     .catch(error => {
  //       // Handle errors here.
  //       console.error(error);
  //     })
  //   }
  // }, [token])

  

  return (
    <main
      className={` ${inter.className}`}
      style={{background: '#212121'}}
    >
      <div className="flex h-screen w-screen ">
        <div className="w-2/12 "> 
          <SideNav />
        </div>
        <div className="w-5/6  ">
          <TopNavbar userFirstName={userData.first_name} setShowSignUpModal={setSignUpModal} handleSignUp={handleSignUp} setShowSignInModal={setSignInModal} />
          <MainSection />
        </div>
      </div>
      <SignUpModal 
        showModal={signUpModal} 
        setShowModal={setSignUpModal} 
        formData={userSignUpData} 
        setFormData={setUserSignUpData}
        handleSignUp={handleSignUp}
      />
      <SignInModal 
        showModal={signInModal} 
        setShowModal={setSignInModal} 
        handleSignIn={handleSignIn} 
        signInData={userSignInData} 
        setSignInData={setUserSignInData} 
      />
    </main>
  );
};

export default Home;
