import {$authHost, $host} from "./index";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const registration = async (name, email, nickname, password,surname,phone,country,themes) => {
    const payload = {name, email, nickname, password,themes}

    const {data} = await $host.post('auth/registration', payload)


}

export const loginAccount = async (email, password) => {
    console.log("login")
    const response = await $host.post('auth/login', {email, password})
    console.log(response.data)
    localStorage.setItem("token", response.data.token)
    return jwtDecode(response.data.token)
}
//
// export const edit = async () => {
//
//     const {data} = await axios.post(process.env.REACT_APP_API_URL + 'auth/update/', {refreshToken: refreshToken})
//     console.log(data)
//
//     return jwtDecode(data)
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