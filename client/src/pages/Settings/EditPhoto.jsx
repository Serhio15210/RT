import React, {useContext, useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import axios from "axios";
import {AuthContext} from "../../context";

const EditPhoto = ({modal,setModal}) => {
    const [drag, setDrag] = useState(false)
    const {setAvatar}=useContext(AuthContext)
    const dragStartHandler = (e) => {
        e.preventDefault()
        setDrag(true)
    }
    const dragLeaveHandler = (e) => {
        e.preventDefault()
        setDrag(false)
    }
    const onDropHandler=(e)=>{
        e.preventDefault()
        let photo=e.dataTransfer.files
        console.log(e)
       setAvatar(photo)
        // const formPhoto=new FormData()
        // formPhoto.append('photo',photo)
        // axios.post('url',formPhoto)
        setDrag(false)
    }
    return (

            modal?
            <Modal show={true} className="  modalEdit "  >
                <ModalHeader>Edit photo</ModalHeader>
                <ModalBody className="  modalEditBody" >
                    {
                        drag ? <div className="toDrag"
                                    onDragStart={e => dragStartHandler(e)}
                                    onDragLeave={e => dragLeaveHandler(e)}
                                    onDragOver={e => dragStartHandler(e)}
                                    onDrop={e=>onDropHandler(e)}>
                                Отпустите фото чтобы загрузить его
                            </div>
                            :
                            <div  className="toDrag" onDragStart={e => dragStartHandler(e)}
                                 onDragLeave={e => dragLeaveHandler(e)}
                                 onDragOver={e => dragStartHandler(e)}>
                                Перетащите фото чтобы загрузить его
                            </div>
                    }
                    <ModalFooter>
                        <Button onClick={e=>setModal(false)}>Close</Button>
                    </ModalFooter>
                </ModalBody>


            </Modal>:null

    );
};

export default EditPhoto;