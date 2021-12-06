import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";

import {useFetching} from "../hooks/useFetching";
import MyButtons from "../UI/buttons/MyButtons";

import PostComment from "./PostComment";

const PostsIdPages = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comment,setComment]=useState(false)
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)

    })
    const createComment=(postComment)=>{
        setComments([...comments,postComment])
    }
    useEffect( () => {
        fetchPostById(params.id)
        fetchComments(params.id)

    },[] )

    return (
        <div>
            <h1 style={{color:"white"}}>You opened a post with id={params.id} </h1>

            <div key={post.id}>{post.id}{post.title}</div>
            <h1 style={{color:"white"}}>
                Comments
            </h1>

            <div>
                    {comments.map(comm =>
                        <div  key={comm.id} style={{marginTop: 15}}>
                            <h5 style={{color:"white"}}>{comm.email}</h5>
                            <div><p style={{color:"white"}}>{comm.body}</p></div>
                        </div>

                    )}
                </div>

            <MyButtons onClick={()=>setComment(true)}>
                Add comments
            </MyButtons>
            {
               comment===true&&
                <PostComment create={createComment}/>
            }
            {
                comment===true&&
                <MyButtons onClick={()=>setComment(false)}>Cancel</MyButtons>
            }




        </div>
    );
};

export default PostsIdPages;