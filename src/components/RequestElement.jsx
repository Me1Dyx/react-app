import { useContext } from "react"
import { Link } from "react-router"
import { currentStorage } from "../App"

export default function RequestElement({ request, index }) {
    let { currentUser } = useContext(currentStorage)
    let requestElement = (
        currentUser.email == "operator@example.com" ? (
        <Link to={`/admin/requests/${index}`} className="requestElem">
                <h3 className="requestName">{request.name}</h3>
                <div className="requestRight">
                    <h3 className="requestNature">{request.nature}</h3>
                    <h3 className="requestStatus">{request.status}</h3>
                </div>
            </Link>
        ) : (
        <Link to={`/requests/${index}`} className="requestElem">
                <h3 className="requestName">{request.name}</h3>
                <h3 className="requestNature">{request.nature}</h3>
            </Link>
        )
    )
    return (
        <>
        {requestElement}
        </>
    )
}