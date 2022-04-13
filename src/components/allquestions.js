import React, {useState, useEffect} from "react";

function AllQuestions() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/all")
        .then(response => response.json())
        .then(response => response["questions"])
        .then(questionsList => setQuestions(questionsList));
    }, []);

    return (
        <div>
            <h1>Take a look at all the questions we have!</h1>
            {questions.map((question, i) => (
                <p key={i}>{question}</p>
            ))}
        </div>
    );
}

export default AllQuestions;