import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Countries from './components/Countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
    <h1>Welcome to fancy react routing!!!</h1>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/friend/:friendId' element={<FriendDetails></FriendDetails>}></Route>
      <Route path='/posts' element={<Posts></Posts>}>
        <Route path =':postId' element={<PostDetails></PostDetails>}></Route>
      </Route>
      <Route path='/countries' element={<Countries></Countries>}></Route>
      <Route path='/country/:countryName' element={<CountryDetails></CountryDetails>}></Route>
      <Route path='/friends' element={<Friends></Friends>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    </div>
  );
}

export default App;
