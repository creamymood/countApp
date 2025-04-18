import { useState } from 'react'

import './App.css'
import Viewer from './components/viewer'
import Controller from './components/controller'

function App() {
  const [num, setNum] = useState(0)
  const handleClick = (value) => {
    setNum(num + value)
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='h-[500px] w-[500px] bg-[#fbe4e4] flex justify-center items-center flex-col text-center rounded-[100px]'>
        <div>
          <h1 className='text-[70px]'>Simple Counter</h1>
        </div>
        <section>
          <Viewer num={num} />
        </section>
        <section className='w-[500px]'>
          <Controller handleClick={handleClick}/>
        </section>
      </div>
    </div>
  )
}

export default App
