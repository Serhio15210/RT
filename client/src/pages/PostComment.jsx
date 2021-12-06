import React, {useState} from 'react';
import MyButtons from "../UI/buttons/MyButtons";
import MyInput from "../UI/input/MyInput";

const PostComment = ({create}) => {
    const [comment, setComment] = useState({email: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost={
            ...comment,id:Date.now()
        }
        create(newPost)
        setComment({email: '', body: ''})
    }
    return (
        <form>

            <MyInput value={comment.body}
                     onChange={e => setComment({...comment,email:'@M',body:e.target.value})}
                     type="text" placeholder="Comment description"/>

            <MyButtons onClick={addNewPost}>Create post</MyButtons>

        </form>
    );
};

export default PostComment;