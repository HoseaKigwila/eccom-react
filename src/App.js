import React, {useState} from 'react'; 
import Nav from './Nav'; 
import './App.css'; 
 
// modified code 
const App = () => { 
// existing code 
const [activeTab, setActiveTab] = useState('items'); 
return ( 
<div className="App"> 
{/* modified code */} 
<Nav 
activeTab={activeTab} 
onTabChange={setActiveTab} 
/> 
{/* existing code */} 
<main className="App-content"> 
<span>Empty</span> 
</main> 
</div> 
); 
} 
// existing code 
export default App; 







// import React from 'react'; 
// import Nav from './Nav';
// import './App.css'; 



// class App extends React.Component{

//   // constructor(){
//   //   super();

    
//   // }

//   render(){
//     return(
//      <Nav />
      
//     )
//   }
// }

// export default App;
