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
import UserProfileDetails from './UserProfile/UserProfileDetails';
import MainArea from './MainArea/MainArea';
import UserDataProfile from './SinglePost/UserPost';
import MyPage from './CreatingPage/CreatingPage';
import AllPost from './AllPost/AllPots';
import MyFriend from './FriendFile/Friend';
import Mymarket from './AllAPI/AllApi';
import MyVideo from './AllAPI/Video';
import SearchItem from './HeaderArea/SearchItem';
// import LikeCount from './AllAPI/AllApi';


function App() {
  
  return (

    <div className="App">
     
     {/*<LoginPage />*/}

    
      <Routes>
    
        <Route path='/'  exact={true} element={ <LoginPage /> }/>
        {/* <Route path='/AllApi' element={<LikeCount/>}/> */}
        <Route path='/HeaderArea' element={ <HeaderArea /> }/>
       <Route path='/SignUp' element={<SignUp/>}/>
       <Route path='/Flage' element={<Flage/>}/>
       <Route path='/HomePage' element={<HomePage/>}/>
        <Route path='/AllPost' element={<AllPost/>}/>
       <Route path='/UserProfile' element={<UserProfile/>}/>
    <Route path='/ThemeProvider' element={<ThemeProvider/>}/>
    <Route path='/UserProfileDetails' element={<UserProfileDetails/>} />
    <Route path='/MainArea' element={<MainArea/>}/>
      <Route path='/AllPost/:id' element={<UserDataProfile/>}/> 
      <Route path='/MyPage' element={<MyPage/>}/>
      <Route path='/Myfriend' element={<MyFriend/>} />
      <Route path='/MyMarket' element={<Mymarket/>}/>
      <Route path='/MyVideo' element={<MyVideo/>}/>
      <Route path='/SearchItem' element={<SearchItem/>}/>
      </Routes>
     
   
    {/*<HeaderArea />*/}
    
    </div>
  );
}

export default App;
