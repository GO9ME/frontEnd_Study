import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

import './App.css';

// 한줄
/*
  여러줄 주석 js
  <img src="path" id="img" class="img" data-my/>
  // attribute
*/
function App(){
  const logo = "KOREAIT";
  const menus = [ '오특', '신상', '랭킹', 'makeup', 'korea', 'react'];
  const consolePrint = ()=>{
      console.log('print');
  }
  return (
   <div>
      <Header  logo={"jemicom"} 
               menus={menus} 
               consolePrint={ consolePrint }
      />
      
      <Section />
      <Footer>내용이 있으면 쌍으로 이루어진 태그로 만들고 내용이 없으면 단일 태그로 만들어요</Footer>

      {/* <div>Hello React</div>
      <a href="http://www.naver.com"> naver go </a>
      <First /> 

      <Second />
      <Third />*/}
   </div>  
  )
}

export default App;