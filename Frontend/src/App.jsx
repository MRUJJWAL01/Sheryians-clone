import React from 'react'
import Routing from './routing/Routing'
import Home from './Pages/Home'

const App = () => {
  return (
    <div className='h-screen w-full '>
      <Home />
      <Routing />
    </div>
  )
}

export default App