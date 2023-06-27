import Footer from '@components/Footer/Footer'
import Navbar from '@components/Navbar/Navbar'
import React from 'react'


type Props = {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='h-screen flex flex-col justify-between '>
      <Navbar/>
      <div>
      {children}
      </div>
    
    <Footer />
    </div>
  )
}

export default Layout