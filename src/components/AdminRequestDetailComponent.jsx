import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { currentStorage } from "../App"

export default function AdminRequestDetailComponent() {
    let {currentUser} = useContext(currentStorage)
    if (!currentUser) {
        return <h1>Зареєструйтесь</h1>
    }

    let [requests, setRequests] = useState(localStorage.getItem('requests') ? JSON.parse(localStorage.getItem('requests')) : [])
    let index = useParams()
    let navigate = useNavigate()

    function statusChanger() {
        let newMassive = requests.map((item, ind) => 
            ind === +index.id ? { ...item, status: item.status === "Не виконано" ? "Виконано" : "Не виконано" } : item
        )
        setRequests(newMassive)
        localStorage.setItem('requests', JSON.stringify(newMassive))
    }
    if (currentUser.email !== "operator@example.com") {
        return <h1>Ви не є оператором</h1>
    }
    if (+index.id > requests.length - 1)
    {
        navigate("/not-found")
        return null
    }
    else {
        return (
            <>
            <div className="requestDetailPage">
                <h2 className="requestDetailName">{requests[+index.id].name}</h2>
                <h3 className="requestDetailDesc">{requests[+index.id].desc}</h3>
                <h2 className="requestDetailNature">{requests[+index.id].nature}</h2>
                <div className="requestDetailStatus">
                    <h2 className="requestDetailStat">{requests[+index.id].status}</h2>
                    <button onClick={statusChanger} className="requestDetailStatusChanger">Змінити статус</button>
                </div>
                <h2 className="requestDetailAuthor">{requests[+index.id].author}</h2>
                <h2 className="requestDetailDate">{requests[+index.id].date}</h2>
            </div>
            </>
        )
    }
}