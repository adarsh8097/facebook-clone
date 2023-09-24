import React from 'react';
import './App.css';
import { Route,Routes} from 'react-router-dom';
import HeaderArea from './HeaderArea/HeaderArea';
import LoginPage from './LoginPage/LoginPage';
import SignUp from './SignUp/SignUp';
import Flage from './Flage/Flage';
import HomePage from './HomePage/HomePage';
import UserProfile from './UserProfile/UserProfile';
import ThemeProvider from './Theme/ThemeProvider';
//import AllPost from './AllPost/AllPots';

function App() {
  
  return (

    <div className="App">
     
     {/*<LoginPage />*/}

    
      <Routes>
    
        <Route path='/LoginPage'  exact={true} element={ <LoginPage /> }/>

        <Route path='/HeaderArea' element={ <HeaderArea /> }/>
       <Route path='/SignUp' element={<SignUp/>}/>
       <Route path='/Flage' element={<Flage/>}/>
       <Route path='/HomePage' element={<HomePage/>}/>
        {/* <Route path='/AllPost' element={<AllPost/>}/> */}
       <Route path='/UserProfile' element={<UserProfile/>}/>
    <Route path='/ThemeProvider' element={<ThemeProvider/>}/>
       
      </Routes>
     
   
    {/*<HeaderArea />*/}
    
    </div>
  );
}

export default App;
