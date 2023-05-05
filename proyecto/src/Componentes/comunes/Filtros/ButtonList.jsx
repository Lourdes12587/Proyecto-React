import React from 'react'

const ButtonList = ({categories, filterCategory}) => {
  return (
    
    <div className='categories'>
      {categories.map(category =>(
        <button style={{
          fontSize: '0.9rem',
          background: 'linear-gradient(90deg, #584c99, #0f0b8e)',
          color: 'white',
          transition: 'all 0.3s ease',
          padding: '20px 20px',
          marginTop: '20px',
	        marginleft: '15px'
          
          }}

          type='button'
          className='btn-caategory'
          onClick={()=>filterCategory(category)}
          key={category}
          >
          {category}
        </button>
      ))}
    </div>
  )
}

export default ButtonList
