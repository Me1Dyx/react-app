import { useContext, useState } from "react"
import RequestsListComponent from "./RequestsListComponent"
import { currentStorage } from '../App'

export default function UserRequestsComponent(params) {
    let {currentUser} = useContext(currentStorage)
    if (!currentUser) {
        return <h1>Зареєструйтесь</h1>
    }
    let [nameProblem, setNameProblem] = useState("")
    let [descPromlem, setDescProblem] = useState("")
    let [nature, setNature] = useState("Сантехніка")
    let date = new Date().toLocaleDateString()
    let savedRequests
    let [requests, setRequests] = useState(() => {
        savedRequests = localStorage.getItem('requests')
        return savedRequests ? JSON.parse(savedRequests) : []
    })
    let myRequests = requests.filter(element => element.author == currentUser.email)
    let [problem, setProblem] = useState(<p></p>)
    if (currentUser.email == "operator@example.com") {
        return <h1>Ви не є користувачем</h1>
    }
    
    function checkState(event) {
        if (event.nativeEvent.inputType === "deleteContentBackward") {
            let a = nameProblem.split("")
            let b = a.slice(0, a.length - 1)
            setNameProblem(b.join(""))
            return
        }
        setNameProblem(nameProblem + event.nativeEvent.data)
    }
    function checkState2(event) {
        if (event.nativeEvent.inputType === "deleteContentBackward") {
            let a = descPromlem.split("")
            let b = a.slice(0, a.length - 1)
            setDescProblem(b.join(""))
            return
        }
        setDescProblem(descPromlem + event.nativeEvent.data)
    }

    function submitListener(event) {
        event.preventDefault()
        if (nameProblem.length >= 20 || nameProblem.length == 0) {
            setProblem(<p className='regProblem'>Некоректне ім'я</p>)
            return
        }
        if (descPromlem.length >= 200 || descPromlem.length == 0) {
            setProblem(<p className='regProblem'>Некоректний опис</p>)
            return
        }
        let request = {name: nameProblem, desc: descPromlem, nature: nature, status: "Не виконано", author: currentUser.email, date: date}
        let newRequests = [...requests, request]
        setRequests(newRequests)
        localStorage.setItem('requests', JSON.stringify(newRequests))
    }

    return (
        <>
            <div className="requestsComponent">
                <div className="createRequestMenu">
                    <form className="requestForm" onSubmit = {submitListener}>
                        <input className = "requestInput" type = "text" name = "requestName" placeholder = "Назва проблеми(До 20 символів)" value = {nameProblem} onChange = {checkState}></input>
                        <input className = "requestInput" type = "text" name = "requestDesc" placeholder = "Коротко опишіть проблему(До 200 символів)" value = {descPromlem} onChange = {checkState2}></input>
                        <select className = "natureSelect" name="nature" id="nature" value={nature} onChange={(event) => setNature(event.target.value)}>
                            <option value="Сантехніка">Сантехніка</option>
                            <option value="Електрика">Електрика</option>
                            <option value="Мастер на годину">Мастер на годину</option>
                            <option value="Комп'ютер">Комп'ютер</option>
                        </select>
                        <input className = "requestSubmit" type = "submit" value = "Відправити запрос"></input>
                    </form>
                    {problem}
                </div>
                <RequestsListComponent requests={myRequests}/>
            </div>
        </>
    )
}