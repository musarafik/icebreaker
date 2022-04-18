import React, {useEffect, useState} from "react";
import { buildUrl } from "../utilities";
import "./homepage.css";

function HomePage() {
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        getAndSetQuestion();
    }, []);

    const getNewQuestion = () => {
        getAndSetQuestion();
    }

    const getAndSetQuestion = () => {
        fetch(buildUrl("/single"))
        .then(response => response.json())
        .then(response => response["question"])
        .then(qstn => setQuestion(qstn));
    }

    return (
        <div>
            <h1 style={{textAlign:"center"}}>Welcome to Ice Breaker!</h1>
            <div className="question-answer-container">
                <p>{question}</p>
                <button onClick={getNewQuestion}>Click for a new question</button>
            </div>
        </div>
    );
}

export default HomePage;