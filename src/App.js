
import './App.css';

import {Routes, Route, Navigate} from 'react-router-dom';

import {MainLayouts} from "./Layours/MainLayouts";
import {HomePage} from "./Pages/HomePage/HomePage";
import {UsersPage} from "./Pages/UsersPage/UsersPage";
import {PostsPage} from "./Pages/PostsPage/PostsPage";
import {AboutPage} from "./Pages/About Page/AboutPage";
import {NotFoundPage} from "./Pages";

function App() {
  return (
<Routes>
    <Route path={'/'} element={<MainLayouts/>}>
      <Route index element={<Navigate to={'/home'}/>}/>
  <Route path={'/home'} element ={<HomePage/>}/>
  <Route path={'/users'} element={<UsersPage/>}/>
  <Route path={'/posts'} element={<PostsPage/>}/>
  <Route path={'/about'} element={<AboutPage/>}/>
  <Route path={'*'} element={<NotFoundPage/>}/>

  </Route>

</Routes>
  );
}

export default App;
