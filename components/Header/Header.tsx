import React from 'react'

import { Avocado } from '@components/SVGIcons'

const Header = props => {
  return (
    <div className='flex flex-col items-center mb-9'>
        <div className='flex items-center w-full justify-center'>
            <div className='text-4xl font-semibold'>Palta</div>
            <Avocado size={'48'}/>
        <div className='text-4xl font-semibold'>Avo</div>
        </div>
        <div className=' text-green-500 mt-6' >¿Deberia comer un avo hoy?</div>
        
    </div>

  )
}



export default Header