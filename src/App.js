
import './App.css';

import {Routes, Route} from 'react-router-dom';

import {MainLayouts} from "./Layours/MainLayouts";
import {HomePage} from "./Pages/HomePage/HomePage";
import {UsersPage} from "./Pages/UsersPage/UsersPage";
import {PostsPage} from "./Pages/PostsPage/PostsPage";
import {AboutPage} from "./Pages/About Page/AboutPage";

function App() {
  return (
<Routes>
    <Route path={'/'} element={<MainLayouts/>}/>

  <Route path={'/home'} element ={<HomePage/>}/>
  <Route path={'/users'} element={<UsersPage/>}/>
  <Route path={'/posts'} element={<PostsPage/>}/>
  <Route path={'/about'} element={<AboutPage/>}/>

  <Route/>

</Routes>
  );
}

export default App;
