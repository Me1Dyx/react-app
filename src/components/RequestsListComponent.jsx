import { useContext } from "react"
import RequestElement from "./RequestElement"
import { currentStorage } from "../App"

export default function RequestsListComponent({ requests }) {

    let { currentUser } = useContext(currentStorage)
    let requestsList = (
        currentUser.email === "operator@example.com" ? (
        <div className="adminRequestsList">
            {requests.map((request, index) => (
                <RequestElement key={index} index = {index} request={request} />
            ))}
        </div>
        ) : (
        <div className="requestsList">
            {requests.map((request, index) => (
                <RequestElement key={index} index = {index} request={request} />
            ))}
        </div>
        )
    )
    return (
        <>
        {requestsList}
        </>
    )
}