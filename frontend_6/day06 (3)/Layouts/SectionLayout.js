import React from 'react'
import { Outlet } from 'react-router-dom'

const SectionLayout = () => {
  return (
    <section className='section-container'>
        <Outlet />
    </section>
  )
}

export default SectionLayout