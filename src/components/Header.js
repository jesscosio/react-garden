import React, {useState} from "react";
import { EmojiRain } from "./Rain";
import history from '../history';
import GoogleAuth from './GoogleAuth';


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
  <header className="d-flex flex-wrap justify-content-center border-bottom" style={{ fontFamily:"Raleway, serif", width:'100vw'}}>
      <GoogleAuth />
      <a href="/" className="d-flex align-items-center mb-3 pt-3 mb-md-0 me-md-auto text-dark text-decoration-none">
      <img style={{alignContent:'center',height:'40px', width:'32px', margin:'5px'}} alt="logo" src={props.imageSrc} />
        <span className="fs-4">{props.headerText}</span>
      </a>
       {/* { renderRain() } */}
    </header>
  );
};

export default Header;