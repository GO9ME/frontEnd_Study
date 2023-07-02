import Navbar from './components/Navbar/Navbar';
import './App.scss';
// node-sass react-icons

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
} from './container';
// index.js 생략 

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Header />
      <Skills />
      <Testimonial />
      <Work />

    </div>
  );
}

export default App;
