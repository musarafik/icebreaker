import React, {useEffect, useState} from "react";
import { buildUrl } from "../utilities";

function HomePage() {
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        fetch(buildUrl("/single"))
        .then(response => response.json())
        .then(response => response["question"])
        .then(qstn => setQuestion(qstn));
    }, []);

    const getNewQuestion = () => {
        fetch(buildUrl("/single"))
        .then(response => response.json())
        .then(response => response["question"])
        .then(qstn => setQuestion(qstn));
    }

    return (
        <div>
            <h1>Welcome to Ice Breaker!</h1>
            <p>{question}</p>
            <button onClick={getNewQuestion}>Click for a new question</button>
        </div>
    );
}

export default HomePage;