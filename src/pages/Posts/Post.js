import React from 'react';

const Post =(props)=>{
    const {id,userId,body,title}=props.post;
    // console.log(props.post)
    return(
        <div>
            <h1>{id}</h1>
            <h1>{title}</h1>
        </div>
    )
    
}

export default Post;