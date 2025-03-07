import react from 'react';
import { useNavigate } from "react-router-dom";
import notfoundpic from "../assets/images/404.jpg";

function something(){
    const navigate = useNavigate();

    return (
    <div className="notfound">
        <img src={notfoundpic} alt="" ></img>
        <button className="btn" onClick={() => navigate("/Home")}>HOME</button>
    </div>)
}

export default something;