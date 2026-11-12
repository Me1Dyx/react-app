import { useState, useContext } from 'react'
import { usersStorage, operatorStorage, currentStorage } from '../App'
import { Link, useNavigate } from 'react-router'

export default function SignupComponent(params) {
    let users = useContext(usersStorage)
    let operatorUser = useContext(operatorStorage)
    let currentUserApp = useContext(currentStorage)
    let navigate = useNavigate()
    let currentUser
    let [email, setEmail] = useState("")
    let [pass, setPass] = useState("")
    let [problem, setProblem] = useState(<p></p>)

    function submitListener(params) {
        params.preventDefault()
        let userAlreadyExists = false
        for (let i = 0; i < users.length; i++) {
            if (email == users[i].email && pass == users[i].password) {
                userAlreadyExists = true
                break
            }
        }

        if (userAlreadyExists == true) {
            currentUser = users.find((user) => user.email === email && user.password === pass)
            localStorage.setItem('currentUser', JSON.stringify(currentUser))
            console.log(localStorage.getItem('currentUser'))
            currentUserApp.setCurrentUser(currentUser)
            navigate("/requests")
        }
        else if (email == JSON.parse(localStorage.getItem('operatorUser')).email && pass == JSON.parse(localStorage.getItem('operatorUser')).password) {
            currentUser = { email: "operator@example.com", password: "operator123" }
            localStorage.setItem('currentUser', JSON.stringify(currentUser))
            console.log(localStorage.getItem('currentUser'))
            currentUserApp.setCurrentUser(currentUser)
            navigate("/admin/requests")
        }
        else {
            setProblem(<p className='regProblem'>Невірний email або пароль</p>)
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
                    <h1 className="SignupTitle">Увійти до акаунту</h1>
                    <form action = "#" method = "get" onSubmit = {submitListener}>
                        <input className="SignupInput" type="text" name="email" value = {email} onChange = {changeFunction1} placeholder = "Email"/>
                        <input className="SignupInput" type="text" name="password" value = {pass} onChange = {changeFunction2} placeholder = "Пароль"/>
                        <input className="SignupSubmit" type = "submit" value = "Увійти"></input>
                    </form>
                    <Link to="/reg" className="reg-button">Немає акаунту? Зареєструватися</Link>
                    {problem}
                </div>
            </div>
        </>
    )
}