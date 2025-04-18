import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Viewer from './components/viewer'
import Controller from './components/controller'

function App() {
  
  return (
    <>
      <div>
        <h1>Simple Counter</h1>
      </div>
      <section>
        <Viewer/>
      </section>
      <section>
        <Controller/>
      </section>
      
    </>
  )
}

export default App
