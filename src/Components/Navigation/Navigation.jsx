import React from 'react'

//TODO: React Router
import { Link } from 'react-router-dom'

//TODO: Import Logo And BG Constant
import Logo from './../../assets/Logo.png'
import { navLinks, navLinksMobile } from './../../Constant/index'

function Navigation () {
  return (
    <>
      <div className='bg-black/75 absolute top-0 left-0 w-full h-[126]'>
        <div className='max-w-6xl mx-auto'>
          <div className='container mx-auto p-4 flex items-center justify-between xl:justify-center '>
            <div className=' items-center justify-start pr-4'>
              <img src={Logo} alt='Girl in a jacket' />
            </div>
            <div className='text-green-500 text-bold w-[100px] mx-3'>
              <p className='text-xs w-full text-left '>Open All Days</p>
              <p className='text-xs w-full text-left'>11 AM- 11 PM</p>
            </div>
            <div className='hidden xl:flex navbar bg-orange-500 rounded-full justify-center'>
              <div className='items-center mx-3'>
                <ul className='menu menu-horizontal text-black font-semibold'>
                  {navLinks.map(nav => {
                    return (
                      <li key={nav.id}>
                        <Link to={`${nav.link}`}>{nav.title}</Link>
                      </li>
                    )
                  })}

                  <li className='bg-black rounded-full text-white'>
                    <a>+201013455022</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className='xl:hidden fixed left-1/2 bottom-10 -translate-x-1/2 bg-black/75 py-2 pr-3 rounded-full text-white '>
              <ul className='menu menu-horizontal bg-base-500 rounded-box text-sm'>
                {navLinksMobile.map(nav => {
                  return (
                    <li key={nav.id} className='hover:cursor-pointer'>
                      <Link to={`${nav.link}`}>
                        <img
                          src={nav.icon}
                          className='text-white'
                          alt='ICONS'
                        />
                        {nav.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation