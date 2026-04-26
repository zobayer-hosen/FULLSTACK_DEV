import { useState,useEffect } from "react";

import API from "../api";

function Feed(){
    const [posts,setPosts]= useState([]);

    useEffect(()=>{
        const fetchPosts = async ()=>{
            try{
                const response = await API.get('/get');
                setPosts(response.data.posts)
            }catch(error){
                console.error('Error fetching posts:',error);
            }
        };
        fetchPosts();
    },[]);

    return(
        <section className="feed-section">
            <h1>Feed</h1>
            {posts.length>0?(
                posts.map((post)=>(
                    <div key={post._id} className="post">
                        <img src={post.image} alt="post" className="post-image" style={{maxWidth: '200px'}} />
                        <p className="post-caption">{post.caption}</p>
                    </div>
                ))
            ):(
                <p>No posts Available.</p>
            )}
        </section>
    )
}

export default Feed;