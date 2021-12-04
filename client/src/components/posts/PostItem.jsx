import React from 'react';
import MyButtons from "../../UI/buttons/MyButtons";
import {useHistory} from "react-router-dom";
import "./PostItems.css"

const PostItem = (props) => {
    const router=useHistory()
    return (
        <div className=" posts" style={{color:"white"}} onClick={() => router.push(`/home/posts/${props.post.id}`) }>
            <div className="p-2">
                <strong>{props.post.id}.{props.post.title}</strong>
            </div>
            <div  className="items">
                {props.post.body}
            </div>

        </div>
    );
};

export default PostItem;