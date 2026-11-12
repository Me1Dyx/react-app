import { useContext, useState } from "react"
import RequestsListComponent from "./RequestsListComponent"
import { currentStorage } from '../App'

export default function AdminRequestsComponent(params) {
    let {currentUser} = useContext(currentStorage)
    if (!currentUser) {
        return <h1>Зареєструйтесь</h1>
    }
    let savedRequests
    let [requests, setRequests] = useState(() => {
        savedRequests = localStorage.getItem('requests')
        return savedRequests ? JSON.parse(savedRequests) : []
    })
    if (currentUser.email !== "operator@example.com") {
        return <h1>Ви не є оператором</h1>
    }

    return (
        <>
            <div className="requestsComponent">
                <RequestsListComponent requests={requests}/>
            </div>
        </>
    )
}