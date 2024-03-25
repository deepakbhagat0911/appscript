import {useState} from 'react';
import HeaderList from './HeaderList';
import './Header.css';

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    // <div className='header-container'>
     
    //   <div className='header'>
    //     <img src="./Logo.svg" alt="" />
    //     <h2>LOGO</h2>
    //     <div className='icons'>
    //       <img src="./search-normal.svg" alt="" />
    //       <img src="./Vector.svg" alt="" />
    //       <img src="./shopping-bag@2x.svg" alt="" />
    //       <img src="./profile.svg" alt="" />
    //     </div>
    //   </div>
    //   <HeaderList />
    // </div>
    <>
     <div className='top-header'>
        <div>Lorem ipsum dolar</div>
        <div>Lorem ipsum dolar</div>
        <div>Lorem ipsum dolar</div>
      </div>
      <div className={`navbar ${collapsed ? "collapsed" : ""}`}>
        <div className="nav-container">
          <div>
          <img src="./Logo.svg" alt="" />
          </div>
          <div className="nav-wraper" style={{fontSize:"26px"}}>
            LOGO
          </div>
          <div className="nav-wraper-btn">
            <button className="menu-button" onClick={toggleNavbar}>
              &#9776;
            </button>
          </div>
           <div className={`nav-wraper nav-links ${collapsed ? "collapsed" : ""}`}>
           <img src="./search-normal.svg" alt="" />
           <img src="./Vector.svg" alt="" />
           <img src="./shopping-bag@2x.svg" alt="" />
           <img src="./profile.svg" alt="" />
         </div>
        </div>
      </div>
      <HeaderList/>
      </>
  );
};

export default Header;
