import React, {useState} from 'react';
import ModalHeader from "react-bootstrap/ModalHeader";
import {Button, ModalBody, ModalFooter} from "react-bootstrap";
import {Modal} from "@material-ui/core";

const EditModal = () => {

    const [showEdit, setShowEdit] = useState(false);

    const handleClose = () => setShowEdit(false);
    const handleShow = () => setShowEdit(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={showEdit} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModal;