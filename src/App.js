import './App.css';
import {Routes, Route} from "react-router-dom";
import {MainLayout,HomeComponents,PostsComponents,UsersComponents,AboutComponents} from "./Components";


function App() {
    return (
        <div>
<Routes>
    <Route path={'/'} element={<MainLayout/>}>
        <Route path={'/home'} element={<HomeComponents/>}/>
        <Route path={'/posts'} element={<PostsComponents/>}/>
        <Route path={'/users'} element={<UsersComponents/>}/>
        <Route path={'/about'} element={<AboutComponents/>}/>
    </Route>


</Routes>
        </div>
    );
}

export default App;
