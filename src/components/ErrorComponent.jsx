import { Link } from 'react-router'

export default function ErrorComponent(params) {
    return (
        <>
        <div className="errorComponent">
            <h1 className="errorBrum">◻brum</h1>
            <img src="https://andromodesign.ai/wp-content/uploads/2025/01/404-Andromo-AI-Design-2.webp" width="720px"></img>
            <h2 className="errorText">The requested page is not found</h2>
            <Link to="/" className="errorBack">Return to main page</Link>
        </div>
        </>
    )
}