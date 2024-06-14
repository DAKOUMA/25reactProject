import React from 'react'
import Accordion from './components/accordian/Accordion'
import data from './components/accordian/data'
import './App.css'
import RandomColor from './components/random-color/RandomColor'

const App = () => {
  return (
    <div>
      <Accordion/>
      <RandomColor/>
    </div>
  )
}

export default App