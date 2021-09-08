import React from 'react';
import Nav from '../../components/Nav';
import moss from '../../assets/moss.jpg';


const HomePage = props => {

    return (
        <div>
            <Nav tab={{name:"Home",value:"home", path:"/"}}/>
                            <div  style={{position:'absolute', 
                        bottom:'10%', fontSize:'4em', zIndex:'9', fontFamily:'Raleway, serif'}} >
                
                    
                </div>
                <div className="ui content" style={{position:"relative"}}>
                <img alt="The Garden Bee" style={{width:'100vw'}} src={moss} />
                <div style={{position:'absolute',bottom:"40px", width:'60%',
                fontFamily:'Raleway, serif', fontSize: '2em',backgroundColor:'orange',
                 zIndex:'9', opacity:'80%'}}>The Garden Bee</div>
                        
               
                </div>
        </div>
    );
}

export default HomePage;