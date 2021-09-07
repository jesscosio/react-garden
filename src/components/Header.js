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
    <div style={{backgroundColor:'#DADED4'}}>
      <GoogleAuth />
        <div onClick={handleClick} className="ui header" 
        style={{ fontFamily:"Raleway, serif", width:'100vw',
        paddingTop: "10px",margin:'0', zIndex:"9", display:'flex',flexDirection:'column', 
        alignItems:'center'}}>
        <img style={{alignContent:'center'}} alt="logo" src={props.imageSrc} className="ui circular image" />
          {props.headerText}
      </div>
      { renderRain() }
    </div>
  );
};

export default Header;
