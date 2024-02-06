
import { initializeApp } from "firebase/app";
import firebaseConfig from './config';
import {getDatabase , ref,onValue} from 'firebase/database'
import {authErrorCodes} from 'firebase/auth'
import SideBar from './components/SideBar'
import Builder from './components/Builder'
import { useEffect, useState } from "react";
import Header from './components/header';
import Footer from './components/Footer';
import { BrowserRouter as Router,Route ,Routes, useParams } from 'react-router-dom';
import './sass/global.scss'
import BottomTabs from './components/common/BottomTabs'
import { createContext } from 'react';
import TicketList from './components/ticketList';
 export const AppContext = createContext()
 let app = initializeApp(firebaseConfig);
 let db = getDatabase(app)
function App() {
   const [count,setCount]  =  useState(0)
   const [members,setMembers] = useState([])
   const [pageName,setPageName] = useState('')
   const [navBar,setnavBar] = useState(false)

  const changeCount = (val) => {
     setCount(val)
  }
const close = () => {
  setnavBar(false)
}
const openSideNav=()=>{
  setnavBar(true)
}
const changePageName = (route) => {

  setPageName(route)
}
  useEffect(()=>{
    let location = window.location
    setPageName(location.pathname)
    console.log(location.pathname);
    let dbref = ref(db, 'member')
    onValue(dbref,(snapshot)=>{
      let records = [];
      snapshot.forEach((childSnapshot)=>{
         let keyname = childSnapshot.key;
         let  data = childSnapshot.val();
         records.push({'key':keyname,'data':data});     
         setMembers(records);
      });
    })
  },[])
  return (
    <Router>
    <div className="App relative h-[100vh] overflow-scroll" style={{width:'100%'}}>
      {/* openSideNav={openSideNav} */}
      <Header changePageName={changePageName}/>
      {/* <div className='lg:hidden w-full bg-red'>
      <SideBar navbar={navBar} close={close}/>
      </div> */}
      <div className="min-h-[90vh]">
      <AppContext.Provider value={{count,members,changeCount}}>
      <Routes>
          <Route exact path='/' element={ <Builder pageName={pageName}/>}> </Route>
          <Route  path='/:page' element={pageName &&  <Builder pageName={pageName}/>}> </Route>
          {/* <Route exact path='/couter' element={ members && <Counter/>}> </Route> */}
          {/* <Route exact path='/family' element={ members && <ProductList/>}> </Route> */}
          {/* <Route exact path='/about' element={ <TestSaga />}> </Route> */}
          {/* <Route exact path='/ticket-list' element={ <div style={{background:'#f3f3f3'}}><TicketList /></div> }> </Route> */}
          {/* <Route exact path='/log-in' element={ <div style={{background:'#f3f3f3'}}><Login /></div> }> </Route> */}
      </Routes>
      </AppContext.Provider>
      </div>
      <Footer/>
      {pageName && <div className="lg:hidden fixed bottom-0 right-0 w-full">
      <BottomTabs changePageName={changePageName}  pageName={pageName}/>
      </div>}
    </div>
    </Router>
  );
}

export default App;
