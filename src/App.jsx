import React from 'react'
import Accordion from './components/accordian/Accordion'
import './App.css'
import RandomColor from './components/random-color/RandomColor'
import StaringRate from './components/staringRate/StaringRate'
import ImageSlider from './components/image-slider/ImageSlider'
import MoreData from './components/more-data/MoreData'
import NavigationTree from './components/navigation-tree/NavigationTree'
import menu from './components/navigation-tree/data'
import QrCode from './components/qr-code/QrCode'
import DarkMode from './components/darkMode/DarkMode'
import ScrollIndicator from './components/scrollIndicator/ScrollIndicator'

const App = () => {
  return (
    <div>
      {/* <Accordion />  */}
      {/* <RandomColor />  */}
       <StaringRate /> 
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'4'} page={'1'} />  */}
      {/* <MoreData />  */}
      {/* <NavigationTree menu={menu} />  */}
      {/* <QrCode />  */}
      {/* <DarkMode />  */}
      {/*<ScrollIndicator />*/}
    </div>
  )
}

export default App