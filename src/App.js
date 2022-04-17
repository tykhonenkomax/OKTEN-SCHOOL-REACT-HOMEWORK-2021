import './App.css';
import {Routes, Route} from "react-router-dom";
import {GeneralLayoutComponents} from "./GeneralLayout/GeneralLayoutComponents";
import {AboutComponents, CommentsComponents, NotFoundComponents, PostsComponents, UsersComponents,CvComponents} from "./Page";



function App() {
    return (

        <Routes>
            <Route path={'/'} element={<GeneralLayoutComponents/>}>
                <Route path={'/about'} element={<AboutComponents/>}/>
                <Route path={'/users'} element={<UsersComponents/>}/>
                <Route path={'/cvDetails'} element={<CvComponents/>}/>
                <Route path={'/posts'} element={<PostsComponents/>}/>
                <Route path={'/comments'} element={<CommentsComponents/>}/>
                <Route path={'*'} element={<NotFoundComponents/>}/>
            </Route>
        </Routes>
    );
}

export default App;
