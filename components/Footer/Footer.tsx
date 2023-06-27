import Link from 'next/link'
import React from 'react'

const Footer = props => {
  return (
    <div className='grid grid-cols-3 mx-12 my-8 mb-6 pb-10  '>
        <div>
            <div className='font-semibold mb-5'>Nosotros</div> 
            <Link className='text-blue-400' href='/'>Conoce más</Link>
        </div>
        <div>
            <div className='font-semibold mb-5'>Servicios</div> 
            <Link className='text-blue-400'  href='/'>Todos los productos</Link>
        </div>
        <div>
            <div className='font-semibold mb-5'>Hecho por</div> 
          <Link className='text-blue-400'  href='/'>José Ramos</Link>
        </div>
   
    </div>
  )
}



export default Footer