import React from 'react';
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className='Sarthak'>
            <div>
                <img className='logo' src='https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg'/>

            </div>
              <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us </li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    )
}

const styleCard = {
    backgroundColor : "#f0f0f0",
};

const RestaurantCard = (props) => {
    return (
        <div className='res-card' style={styleCard}>
            <img className='res-logo' alt='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7' />
          <h3>{props.resName}</h3> 
          <h4>{props.cuisine} </h4> 
          <h4>5 Stars</h4>
          <h4>1 minutes</h4>
          
        </div>
    )
};


const Body = () => {
    return (
        <div className='body'>
            <div className='Search'>Search</div>
            <div className='res-container'>
                {/* //RESCARD */}
                
                <RestaurantCard resName="Sarthakfoods" cuisine = "Pizaa ! Pizaa ! mast wala"/ >
                <RestaurantCard resName="foooood" cuisine = "ACHHA WLA "/>
                


            </div>
        </div>
    )

};




const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>

        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)