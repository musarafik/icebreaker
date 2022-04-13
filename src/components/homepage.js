import React, {useEffect, useState} from "react";

function HomePage() {
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/single")
        .then(response => response.json())
        .then(response => response["question"])
        .then(qstn => setQuestion(qstn));
    }, []);

    return (
        <div>
            <h1>Welcome to Ice Breaker!</h1>
            <p>{question}</p>
        </div>
    );
}

export default HomePage;