import React from 'react'

import { images } from '../../constants';
//모듈을 index.js를 생략하면 index.js를 자동 로딩함 
import './Navbar.scss';

const Navbar = () => {
  return (
    // https://en.bem.info/methodology/ 이름 짖는 방법
    // https://www.devbridge.com/articles/implementing-clean-css-bem-method/
    // https://getbem.com/introduction/
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {/* 메뉴 삽입 방법 */}
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        {/* <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )} */}
      </div>
    </nav>
  );
}

export default Navbar