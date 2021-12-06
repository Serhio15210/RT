import React from 'react';
import MyButtons from "../../UI/buttons/MyButtons";
import {useHistory} from "react-router-dom";
import "./PostItems.css"

const PostItem = (props) => {
    const router=useHistory()

    return (
        <div className=" posts" >
            <div className="p-2">
                <strong>{props.post.id}.</strong>
            </div>
            <div  className="items">
                {props.post.text}
            </div>

        </div>
    );
};

export default PostItem;