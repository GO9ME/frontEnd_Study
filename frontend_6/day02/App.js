import React, {useState} from 'react'
import Tabs from './components/tabs/Tabs04'
import Accordion from './components/accordion/Accordion03'
import './App.css'
import DarkTheme from './components/theme/DarkTheme'
import Header from './containers/header/Header'
import Section from './containers/section/Section'
import Footer from './containers/footer/Footer'
// 컴포넌트를 분리하는 이유 : 재사용성 

/*
const App = () => {
  return (
    <div>
        <DarkTheme />
        <Accordion  style={{marginBottom : "100px"}} />
        <Tabs/>
         Tabs.css position 사용한 것 때문에 겹침 발생 
    </div>
  )
}
*/
const App = () => {
  const [ darkTheme, setDarkTheme ]=useState(false);
  return (
    <>
         <Header darkTheme={darkTheme}  setDarkTheme={setDarkTheme }/>
         <Section darkTheme={darkTheme} />
         <Footer darkTheme={darkTheme} />
    </>
  )
}
export default App