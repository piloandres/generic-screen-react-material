import React from 'react';
import './Navbar.css';
import logoHome from '../../assets/images/logo-home.png'

class Navbar extends React.Component {
  render(){
    const firstTitle = this.props.firstTitle;
    const secondTitle = this.props.secondTitle;
    return (
      <nav>
        <div id="top-bar">
          <img id="image-bar" src={logoHome} alt=""/>
          <div id="line-separator"></div>
          <div id="parr-first">
            <label id="label-one">{firstTitle}</label>
            <strong id="title-first">{secondTitle}</strong>        
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;