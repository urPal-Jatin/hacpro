import { AnimatePresence } from "framer-motion";
import   ExampleComponent from './dsa'
import './App.css';

import Card from './card';
import Hui from './teammates/profile/teamprofile';
import Nav from './nav/Nav';

function App() {
  return (<>
  
    <div className="hello">
    <AnimatePresence /* initial={false} */  mode='wait' >
     
   
      <Nav/>
      {/* < ExampleComponent/>
      <Card/> */}
      <Hui/>
      
     
     
    
   </AnimatePresence>
   </div>
   </>
  );
}

export default App;
