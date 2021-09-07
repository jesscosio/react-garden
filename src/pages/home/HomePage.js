import React from 'react';
import Nav from '../../components/Nav';
import moss from '../../assets/moss.jpg';


const HomePage = props => {

    return (
        <div className="ui ">
            <Nav tab={{name:"Home",value:"home", path:"/"}}/>
                            <div  className="ui header"  style={{position:'absolute', 
                    bottom:'10%', fontSize:'4em', zIndex:'9', fontFamily:'Raleway, serif'}} >
                
                    <div className="logoBlock" style={{position:'absolute', height:'100%', width:'100%', 
                        backgroundColor: '#DADED4', zIndex:'9', opacity:'80%'}}></div>
                        The Garden Bee
                </div>
                <div className="ui content">
                <img alt="The Garden Bee" className="ui fluid image" src={moss} />
                <div style={{display:'flex', width:'100%', height:'100vh',}}>
                    <div style={{flexBasis:'50%', backgroundColor:'#DADED4'}}></div>
                    <div style={{flexBasis:'50%'}}></div>
                </div>
                </div>
        </div>
    );
}

export default HomePage;