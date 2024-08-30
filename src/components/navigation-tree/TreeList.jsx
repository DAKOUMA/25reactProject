import React from 'react'
import TreeItem from './TreeItem'

const TreeList = ({list = []}) => {
  return (
    <ul className='tree-list-container'>
        {
            list && list.length ? 
            list.map((listItem, index) => (
                <TreeItem item={listItem} key={index}/>
            ))
            : null
        }
    </ul>
  )
}

export default TreeList