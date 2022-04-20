import React, {useContext, useEffect, useState} from 'react';
import {postServices} from "../../Services";
import {PostComponents} from "../PostComponents";
import {Outlet, useSearchParams} from "react-router-dom";
import {MyContext} from "../../index";

const PostsPageComponents = () => {

    const [posts, setPosts] = useState([]);

    const value = useContext(MyContext);
   const[query,setQuery]= useSearchParams({page:'1'});

    useEffect(() => {
        postServices.getAll(query.get('page')).then(({data}) => setPosts(data.slice(0, 5)))
        console.log(value);
        value.name='Olga';
    }, [query])

    let newPage =()=>{
        let page = query.get('page');
        page = +page+1
        setQuery({page:page.toString()})
// const queryObject=Object.fromEntries(query.entries())


    }

    return (
        <div>
            <div>
                {
                    posts.map(post => <PostComponents key={post.id} itemPost={post}/>)
                }
                 <button onClick={()=>newPage()}>BUTTON</button>
            </div>
            <Outlet/>
        </div>
    );
};

export {PostsPageComponents};