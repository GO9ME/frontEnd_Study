// css -> 반복작업 할 일이 많음 : 개발뒷단에서 scss
import { 
  About, 
  Footer, 
  Header, 
  Skills, 
  Testmonial, 
  Work } from './container';
// index 생략한다. 
import Images from "./assets/Images";

function App() {
  return (
    <div className="App">
       <Header />
       <About />
       <Footer />
    </div>
  );
}

export default App;

// 라우트 
// context : icon
// hoc : 함수를 리턴, 애니메이션 라이브러리 패턴
// fetch => axios