import {useEffect, useState} from "react";

export const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [inputValid, setInputValid] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [validPasswordError, setValidPasswordError] = useState(false)
    const [validPhoneError, setValidPhoneError] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "minLength":
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break
                case "isEmpty":
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break
                case "isEmail":
                    const reg=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        reg.test(String(value.toLowerCase()))?setEmailError(false):setEmailError(true)
                    break
                case "isValidPassword":
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(String(value))?setValidPasswordError(false):setValidPasswordError(true)
                    break
                case "isPhoneValid":
                    /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(String(value))?setValidPhoneError(false):setValidPhoneError(true)
            }
        }
    }, [value])
    useEffect(() => {
        if (isEmpty || minLengthError || emailError||validPasswordError ) {
            setInputValid(false)
        } else setInputValid(true)
    }, [isEmpty, minLengthError, emailError])
    return {
        isEmpty, minLengthError, inputValid, emailError,validPasswordError,validPhoneError
    }
}