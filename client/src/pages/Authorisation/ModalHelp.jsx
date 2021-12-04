import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalDialog, ModalFooter, ModalTitle} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import {Input} from "@material-ui/core";



const ModalHelp = ({modal, setModalWindow}) => {
    const [confirmEmail, setConfirmEmail] = useState(false)
    const [confirmCode, setConfirmCode] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState(false)
    const setModal = () => {
        setModalWindow(!modal)
        setConfirmEmail(false)
        setConfirmCode(false)
        setConfirmPassword(false)

    }
    const setEmail=()=>{
        setConfirmEmail(true)

    }
    const setCode=()=>{
        setConfirmCode(true)

    }
    const setPassword=()=>{
        setConfirmPassword(true)
    }
    return (
        confirmPassword?
            <Modal show={modal} className="modal-body">
                <ModalHeader>Password was updated!</ModalHeader>
                <ModalBody>
                    <p>You can enter your new password</p>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={setModal}>Close</Button>
                </ModalFooter>

            </Modal>:

        !confirmEmail?
        <Modal show={modal} className="modal-body">
            <ModalHeader>Forgot password</ModalHeader>
            <ModalBody>
                <p>Write your email</p>
                <Input type="text" placeholder="E-mail"/>
            </ModalBody>
            <ModalFooter>
                <Button onClick={setModal}>Close</Button>
                <Button onClick={setEmail}>Confirm</Button>


            </ModalFooter>

        </Modal>
        :

        <Modal show={modal} className="modal-body">
            <ModalHeader>Forgot password</ModalHeader>


            {
                confirmCode?
                    <>
                    <ModalBody>
                        <p>Enter your new password </p>
                        <Input type="password" placeholder="New password"/>
                        <br/>
                        <Input type="password" placeholder="Repeat password"/>
                    </ModalBody>
                <ModalFooter>
                <Button onClick={setModal}>Close</Button>
                <Button onClick={setPassword}>Confirm</Button>
                </ModalFooter></>:<><ModalBody>
                        <p>Write code from your email</p>
                        <Input type="text" placeholder="Code"/>
                    </ModalBody>
                        <ModalFooter>
                            <Button onClick={setModal}>Close</Button>
                            <Button onClick={setCode}>Confirm</Button>
                        </ModalFooter></>

            }

        </Modal>




)
};

export default ModalHelp;