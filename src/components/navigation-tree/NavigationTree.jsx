import React, { useState } from 'react'
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import TreeList from './TreeList';


const NavigationTree = ({ menu = [] }) => {
  

  return (
    <div className='tree-container'>
      <TreeList list={menu} />
    </div>
  )
}

export default NavigationTree