import React from 'react'
import { Button } from './ButtonStyled'

const ButtonList = ({categories, filterCategory}) => {
  return (
    
    <div className='categories'>
      {categories.map(category =>(
        <Button
          type='button'
          className='btn-caategory'
          onClick={()=>filterCategory(category)}
          key={category}
          >
          {category}
        </Button>
      ))}
    </div>
  )
}

export default ButtonList
