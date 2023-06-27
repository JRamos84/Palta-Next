import React from 'react'
import Link from 'next/link'
import { Avocado } from '@components/SVGIcons'
import Basket from '@components/SVGIcons/Basket'
import { useContext } from 'react'
import { CounterContext } from 'context/CounterContext'

export default function Navbar() {
  const {counter}=useContext(CounterContext)
  return (
    <nav>
      <menu className='flex justify-around mt-6 border-b pb-4 shadow mb-10 font-semibold text-lg'>
        <Link className='flex items-center gap-3' href="/">
            <Avocado/>
            <div className='text-black text-lg'>Avo Store</div>
        </Link>
        <Link className='flex items-center gap-3' href="/about">
          <Basket/>
          <div className='text-black text-lg'>Cansta ({counter ? counter:0})</div>
        </Link>
      </menu>

    </nav>
  )
}
