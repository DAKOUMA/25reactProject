import React from 'react'
import Accordion from './components/accordian/Accordion'
import './App.css'
import RandomColor from './components/random-color/RandomColor'
import StaringRate from './components/staringRate/StaringRate'
import ImageSlider from './components/image-slider/ImageSlider'
import MoreData from './components/more-data/MoreData'

const App = () => {
  return (
    <div>
      {/* <Accordion />  */}
      {/* <RandomColor />  */}
      {/* <StaringRate />  */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'4'} page={'1'} />  */}
      <MoreData />
    </div>
  )
}

export default App