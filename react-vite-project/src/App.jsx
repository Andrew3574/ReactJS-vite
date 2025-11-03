import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Volume } from './components/Volume'
import { Button } from './components/Button/Button'
import './components/Button/Button.module.css'
import {testArray,textArray} from './data'
import { MainBody } from './components/MainBody'
import { FormBody } from './components/FormBody'

export default function App() {

  let [option,setOption] = useState(0)

  function optionClick(opt){
    setOption(opt)
  }

  return (
    <div>      
      <main>
        <Button onClick={()=>optionClick(0)}>Главная страница</Button>
        <Button onClick={()=>optionClick(1)}>Страница с формой</Button>
        {option == 0 ? <MainBody/> : <FormBody/>}
        
      </main>
      </div>
  )
}

