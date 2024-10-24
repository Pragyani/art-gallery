import react from "react";
import { PiSmileySadLight } from "react-icons/pi";

const NotFoundPage = () => {
    return (
        <>
            <div className="nf-post">
                <div className="content-post-nf">
                    <h1>
                        Searched Post Not Found .....<PiSmileySadLight className="sad-emoji" />
                    </h1>
                </div>
            </div>
        </>
    )
}
export default NotFoundPage;