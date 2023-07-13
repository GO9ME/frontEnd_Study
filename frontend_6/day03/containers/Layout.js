import React from 'react'
import { Header, Section, Footer}  from './index'

// const Layout = ({darkTheme, setDarkTheme}) => {
//   return (
//     <div className='Layout'>
//         <Header  darkTheme={darkTheme}  setDarkTheme={setDarkTheme}/>
//         <Section  darkTheme={darkTheme} />
//         <Footer  darkTheme={darkTheme}  />
//     </div>
//   )
// }

const Layout = () => {
      return (
        <div className='Layout'>
            <Header />
            <Section  />
            <Footer />
        </div>
      )
    }
export default Layout