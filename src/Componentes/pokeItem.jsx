import React from 'react'

const Pokeitem = ({title, url}) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
        <img src={url} alt = {title}/>
    </div>
  )
}

export default Pokeitem