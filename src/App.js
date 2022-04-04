import './App.css';

import UserComponents from "./myFolder/components/Users/UserComponents";
import PostsComponents from "./myFolder/components/Posts/PostsComponents";
import CommentComponent from "./myFolder/components/Comments/CommentComponent";



function App() {

  return (
      <div className={'general'}>



    <div className={'usersPosts'}>


      <div className={'users'}>
      {
        <UserComponents/>
      }
      </div>

      <div className={'posts'}>
        {
          <PostsComponents/>
        }
      </div>


    </div>

        <div className={'comments'}>
          {

            <CommentComponent/>
          }
        </div>

      </div>
  );
}

export default App;
