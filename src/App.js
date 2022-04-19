import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import {GeneralLayoutComponents} from "./GeneralLayout";
import {
    AboutComponents,
    CommentsComponents,
    CvCommentsComponents,
    CvComponents,
    NotFoundComponents,
    PostsComponents,
    UsersComponents
} from "./Page";



function App() {
    return (

        <Routes>

            <Route path={'/'} element={<GeneralLayoutComponents/>}>
                <Route index element={<Navigate to={'/about'}/>}/>
                <Route path={'about'} element={<AboutComponents/>}/>
                <Route path={'company_staff'} element={<UsersComponents/>}>
                    <Route path={':id'} element={<CvComponents/>}/>
                </Route>
                <Route path={'posts'} element={<PostsComponents/>}/>
                <Route path={'comments'} element={<CommentsComponents/>}/>
                <Route path={'*'} element={<NotFoundComponents/>}/>

            </Route>
        </Routes>
    );
}

export default App;
