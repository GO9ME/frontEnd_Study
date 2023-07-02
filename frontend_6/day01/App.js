import React from 'react'
import Collapse from './components/Collapse'
import Accordion from './components/Accordion02'
import Tabs from './components/Tabs03'
import './App.css'

const App = () => {
  return (
     <>
        <section>
          <Collapse />
        </section>
        <section>
          <Accordion />
        </section>
        <section>
          <Tabs />
        </section>
     </>
  )
}

export default App