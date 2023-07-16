import React, {useState} from 'react'
import DarkTheme from './components/theme/DarkTheme'
 
import './App.css'
// 컴포넌트를 분리하는 이유 : 재사용성 
const App = () => {
  const [ darkTheme, setDarkTheme] =useState(false);
  return (
    <>
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Section darkTheme={darkTheme} />
        <Footer darkTheme={darkTheme} />
    </>
  )
}
export default App

const Header = ({ darkTheme, setDarkTheme }) => {
    return (
      <header className={ darkTheme ? "dark" : ""}>
          <h1>logo</h1>
        <DarkTheme 
        setDarkTheme={setDarkTheme}
        darkTheme={darkTheme}
        />
      </header>
    )
}

const Section = ({darkTheme}) => { 
    return (
      <section  className={ darkTheme ? "dark" : ""}>
        Section
      </section>
    )
}

const Footer = ({darkTheme}) => {
  return (
    <footer  className={ darkTheme ? "dark" : ""}>
      Footer
    </footer>
  )
}