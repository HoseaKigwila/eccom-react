import React from 'react'; 




class Nav extends React.Component{

    // constructor(){
    //   super();
  
      
    // }
  
    render(){
      return(
        <nav className="App-nav"> 
        <ul> 
            <li className="App-nav-item"> 
              <button>Items</button> 
             </li> 

            <li className="App-nav-item"> 
                <button>Cart</button> 
            </li> 
        </ul> 
        </nav> 
        
      )
    }
  }



export default Nav;