import React, { useState } from 'react'
import TreeList from './TreeList'
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

const TreeItem = ({item}) => {
  const [open, setOpen] = useState(false)

  const hasChildren = item && item.children && item.children.length > 0 

  return (
    <li className='tree-item'>
        <div className='item-title'>
        <p>{item.label}</p>
        { hasChildren ? 
        ( !open ? <CiSquarePlus onClick={() => setOpen(true)}/> : <CiSquareMinus onClick={() => setOpen(false)}/> )
        : null }
        </div>

        {
          open && hasChildren ?
          <TreeList list={item.children} />
          : null
        }
    </li>
  )
}

export default TreeItem
