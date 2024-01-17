import React, {useState} from "react";
import '../styles1.css/ShowHide.css'

export default function ShowHide(){
    const [show, setShow] = useState(true);
    const click = () => {
        setShow(!show);
    }

    return (
        <div className="content">
            <button className="button" onClick={click}>Show/Hide</button>
            { show && <h1>Welcome to React Challenges</h1>}
        </div>
    )
}