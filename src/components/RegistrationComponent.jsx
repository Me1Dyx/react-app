import { useState, useContext } from 'react'
import { usersStorage, operatorStorage } from '../App'
import { Link, useNavigate } from 'react-router'

export default function RegistrationComponent() {
    let users = useContext(usersStorage)
    let operatorUser = useContext(operatorStorage)
    let navigate = useNavigate()
    let [email, setEmail] = useState("")
    let [pass, setPass] = useState("")
    let [problem, setProblem] = useState(<p></p>)

    function submitListener(params) {
        params.preventDefault()
        let userAlreadyExists = false
        for (let i = 0; i < users.length; i++) {
            if (email == users[i].email) {
                userAlreadyExists = true
                break
            }
        }
        if ( !/@.+\.[a-zA-Z]{2,3}$/.test(email) ) {
            setProblem(<p className='regProblem'>Не корректний email</p>)
            return
        }
        if (pass.length >= 20 || pass.length == 0) {
            setProblem(<p className='regProblem'>Не корректний пароль</p>)
            return
        }
        if (userAlreadyExists) {
            setProblem(<p className='regProblem'>Користувач з таким email вже існує</p>)
            return
        }
        else if (email == operatorUser.email) {
            setProblem(<p className='regProblem'>Користувач з таким email вже існує</p>)
            return
        }
        else if (userAlreadyExists == false) {
            let newUser = { email: email, password: pass }
            users.push(newUser)
            localStorage.setItem('users', JSON.stringify(users))
            navigate("/login")
        }
    }

    function changeFunction1(event) {
        if (event.nativeEvent.inputType === "deleteContentBackward") {
            let a = email.split("")
            let b = a.slice(0, a.length - 1)
            setEmail(b.join(""))
            return
        }
        setEmail(email + event.nativeEvent.data)
    }
    function changeFunction2(event) {
        if (event.nativeEvent.inputType === "deleteContentBackward") {
            let a = pass.split("")
            let b = a.slice(0, a.length - 1)
            setPass(b.join(""))
            return
        }
        setPass(pass + event.nativeEvent.data)
    }

    return (
        <>
            <div className="SignupComponent">
                <div className="SignupContainer">
                    <h1 className="SignupTitle">Реєстрація</h1>
                    <form action = "#" method = "get" onSubmit = {submitListener}>
                        <input className="SignupInput" type="text" name="email" value = {email} onChange = {changeFunction1} placeholder = "Email"/>
                        <input className="SignupInput" type="text" name="password" value = {pass} onChange = {changeFunction2} placeholder = "Пароль"/>
                        <input className="SignupSubmit" type = "submit" value = "Зареєструватися"></input>
                    </form>
                    <Link to="/login" className="reg-button">Вже є аккаунт? Увійти</Link>
                    {problem}
                </div>
            </div>
        </>
    )
}