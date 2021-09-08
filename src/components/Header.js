import React, {useState} from "react";
import { EmojiRain } from "./Rain";
import history from '../history';
import GoogleAuth from './GoogleAuth';
import styled from 'styled-components';

const Header = (props) => {
  const [isRaining, setIsRaining] = useState(false);
  const handleClick = () => {
    setIsRaining(!isRaining);

    if(!isRaining) {
      history.push('/');
    }
  };
  const renderRain= () => {
    if(isRaining) {
      return <EmojiRain />
    }
  };

  return (
    // <div style={{backgroundColor:'#DADED4'}}>
      
    //     <div onClick={handleClick} className="ui header" 
    //     style={{ fontFamily:"Raleway, serif", width:'100vw',
    //     paddingTop: "10px",margin:'0', zIndex:"9", display:'flex',flexDirection:'column', 
    //     alignItems:'center'}}>
    //     <img style={{alignContent:'center'}} alt="logo" src={props.imageSrc} className="ui circular image" />
    //       {props.headerText}
    //   </div>
    //   </div>
    <HeaderContainer>
<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <GoogleAuth />
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
      <img style={{alignContent:'center',height:'40px', width:'32px'}} alt="logo" src={props.imageSrc} className="ui circular image" />
        <span className="fs-4">{props.headerText}</span>
      </a>
       {/* { renderRain() } */}
    </header>
    </HeaderContainer>
    
  );
};

export default Header;
const HeaderContainer = styled.div`
$background: rebeccapurple;
$color: #dd0000;
$success: lime;
$warning: orange;
$info: aqua;

$body-bg: #f3f3f0;`;

{/* //     <div>
  //     <GoogleAuth />
  //     <nav class="navbar navbar-light bg-light">
  // <div class="container-fluid">
  //   <a class="navbar-brand" href="#">
  //     <img src={props.imageSrc} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
  //     {props.headerText}
  //     </a>
  //   </div>
  // </nav>
  
  //   </div> */}