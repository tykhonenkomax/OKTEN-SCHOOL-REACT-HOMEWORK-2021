
import './App.css';
import UsersComponents from "./Components/Users/UsersComponents";
import PostsComponents from "./Components/Posts/PostsComponents";
import {useState} from "react";

function App() {
   let [posts, setPosts]=useState([])

  return (
    <div>
<UsersComponents setPosts={setPosts}/>
<PostsComponents posts={posts}/>
    </div>
  );
}

export default App;
