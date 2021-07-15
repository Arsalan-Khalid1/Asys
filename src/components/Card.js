import React, {useEffect, useState} from 'react'
import './Card.css'
import {blogApi} from '../sevices/blogAPI';

function Card() {

   

    const [posts, setPosts] = useState([]);
    const api = new blogApi();
    useEffect(()=>{
        api.loadPosts().then(response => {
            setPosts(response.data.posts)
            console.log(posts);
        }).catch((e) => {
            console.log(e);
        })
    },[])

    return (
        <div className="mainDiv">
        {posts.map(function(post, key){

            return (
             
        <div className="mainCard">
            <div className="imgDiv">
        {post.feature_image ? <img src={post.feature_image}  style={{width:"100%"}}/>: <img src={'/images/avatar.png'}  style={{width:"100%"}}/>}
                 </div>
        <div className="content">
        <p style={{fontSize: "25px "}}>{post.title}</p>
        <h4><b>John Doe</b></h4> 
        <p style={{fontSize: "25px "}}>{post.published_at}</p>
        </div>
    </div>
            )
        })}</div>
    )
}

export default Card
