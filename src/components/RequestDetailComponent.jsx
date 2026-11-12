import { useContext } from "react"
import { useNavigate, useParams } from "react-router"
import { currentStorage } from '../App'

export default function RequestDetailComponent() {
    let {currentUser} = useContext(currentStorage)
    if (!currentUser) {
        return <h1>Зареєструйтесь</h1>
    }

    let requests = localStorage.getItem('requests') ? JSON.parse(localStorage.getItem('requests')) : []
    let myRequests = requests.filter(element => element.author == currentUser.email)
    let index = useParams()
    let navigate = useNavigate()
    if (currentUser.email == "operator@example.com") {
        return <h1>Ви не є користувачем</h1>
    }

    if (+index.id > myRequests.length - 1)
    {
        navigate("/not-found")
        return null
    }
    else {
        return (
            <>
            <div className="requestDetailPage">
                <h2 className="requestDetailName">{myRequests[+index.id].name}</h2>
                <h3 className="requestDetailDesc">{myRequests[+index.id].desc}</h3>
                <h2 className="requestDetailNature">{myRequests[+index.id].nature}</h2>
                <h2 className="requestDetailStatus">{myRequests[+index.id].status}</h2>
                <h2 className="requestDetailDate">{myRequests[+index.id].date}</h2>
            </div>
            </>
        )
    }
}