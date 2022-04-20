import React, {useState, useEffect} from "react";
import { buildUrl } from "../utilities";
import "./allquestions.css";

function AllQuestions() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch(buildUrl("/all"))
        .then(response => response.json())
        .then(response => response["questions"])
        .then(questionsList => setQuestions(questionsList));
    }, []);

    return (
        <div>
            <h1 style={{textAlign:"center"}}>Take a look at all the questions we have!</h1>
            {questions.map((question, i) => (
                <p key={i}>{question}</p>
            ))}
        </div>
    );
}

export default AllQuestions;