import React,{ useEffect, useState } from 'react'
import '../styles/button.scss'
export default function NotFound() {
  const [countDown, setCountDown] = useState<number>(5)
  const toHomePage = () => {
    window.location.href = "http://localhost:8000/"
  }
  useEffect(()=>{
    let timer = window.setTimeout(() => {
      countDown === 0 ? toHomePage() : setCountDown(countDown - 1)
    }, 1000)
    return () => {
      window.clearTimeout(timer)
    }
  },[countDown])
  return (
    <div className="bg-white text-black font-sans flex text-xl justify-center items-center flex-col min-h-screen">
      <img src="/unicorn.gif" className="w-1/4 h-1/4"/>
      <p className="text-7xl text-blue-300 m-4">404 Not Found</p>
      <p className="text-medium">Looks like you've enter a <span className="text-red-500 uppercase">wrong space</span>  🙀<br/>
      <span className="text-2xl text-purple-500 font-semibold mr-1">{ countDown }</span>s later will redirect to <span className="uppercase text-blue-400">HomePage</span> 🏠 <br/>
      or you can click the button below</p>
      <button className="not-found mt-5" onClick={toHomePage}>
        To HomePage
      </button>
    </div>
  )
}
