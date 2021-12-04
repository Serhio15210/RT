import {$authHost, $host} from "./index";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const registration = async (firstname, email, nick, password) => {
    const {data} = await $host.post('auth/registration', {firstname, email, nick, password})

    return jwtDecode(data.value)
}

export const loginAccount = async (email, password) => {
    console.log("login")
    const response = await $host.post('http://localhost:5000/auth/login', {email, password})
    console.log(response.data)
    localStorage.setItem("token", response.data.token)
    return jwtDecode(response.data.token)

    // const rawResponse = await fetch('http://localhost:5000/auth/login', {
    //
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({email: email, password: password})
    // });
    // const content = await rawResponse.json();
    //
    // console.log(content.data.token);
    // return content
}
//
// export const check = async () => {
//     const refreshToken = localStorage.getItem('refreshToken')?.toString() || ""
//     const {data} = await axios.post(process.env.REACT_APP_API_URL + 'api/user/refresh', {refreshToken: refreshToken})
//     console.log(data)
//     localStorage.setItem('accessToken', data.accessToken)
//     localStorage.setItem('refreshToken', data.refreshToken)
//     return jwtDecode(data.accessToken)
// }
//
// export const fetchUser = async () => {
//     const {data} = await $authHost.get('api/user')
//     console.log(data)
//     return data
// }
//
// export const logout = async () => {
//     const refreshToken = localStorage.getItem('refreshToken')?.toString() || ""
//     const response = await $authHost.post('api/user/logout', {refreshToken: refreshToken})
//     console.log(response)
//     localStorage.removeItem('accessToken')
//     localStorage.removeItem('refreshToken')
//     return response
// }