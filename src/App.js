
import './App.css';
import {Route,Routes,Navigate} from "react-router-dom";

import {MainLayoutComponents, NotFoundPagesComponents} from "./Pages";
import {HomePageComponents,UsersPageComponents,PostsPageComponents,AboutPageComponents} from "./Pages";
import {SinglePostComponents} from "./Pages/SinglePostComponents/SinglePostComponents";


function App() {
  return (
      <Routes>

        <Route path={'/'} element={<MainLayoutComponents/>}>
            <Route index element={<Navigate to={'home'}/>}/>
        <Route path={'home'} element={<HomePageComponents/>}/>
        <Route path={'users'} element={<UsersPageComponents/>}/>
            <Route path={'posts'} element={<PostsPageComponents/>}>
                <Route path={':id'} element={<SinglePostComponents/>}/>
            </Route>
        <Route path={'about'} element={<AboutPageComponents/>}/>
            <Route  path={'*'} element={<NotFoundPagesComponents/>}/>
        </Route>

      </Routes>
  );
}

export default App;
