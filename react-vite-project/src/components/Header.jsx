import logo from '/bergshult_shelf_00009.jpg'
import { useState } from 'react'


export default function Header(){
  
  const [now,setNow] = useState(new Date())
  setInterval(()=>setNow(new Date()),1000)

  return (
      <header>
        <img src={logo}></img>
        {/* <h3>Custom header</h3> */}
        <span>time {now.toLocaleTimeString()}</span>
      </header>
  )
}