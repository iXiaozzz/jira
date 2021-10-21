import React, {FormEvent} from 'react'
import { useAuth } from '../../context/auth-context';
import {register} from '../../auth-provider'
interface Base{
    id: number,
}

interface Person extends Base{
    name: string
}
const apiUrl = process.env.REACT_APP_API_URL
console.log('apiUrl',apiUrl);
export const LoginScreen = () => {

    const {login, user} = useAuth()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        login({username, password})
        // register({username, password})
        console.log(username,password);
    }
    return (<form onSubmit={handleSubmit}>
        {user? <div>
            登陆成功， 用户名：{user?.name}<br/>
            token: {user?.token}
        </div>:null}
       
        <div>
            <label htmlFor="username">用户名:</label>
            <input type="text" id={'username'}/>
        </div>
        <div>
            <label htmlFor="password">密码:</label>
            <input type="password" id={'password'}/>
        </div>
        <button type={'submit'}>登陆</button>
    </form>)
}