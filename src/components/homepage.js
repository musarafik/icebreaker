import React, {useEffect, useState} from "react";
import { herokuUrl } from "../config";

function HomePage() {
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        let url = "http://localhost:8080/single";
        if(process.env.NODE_ENV === 'production'){
            url = herokuUrl + "/single";
        }
        fetch(url)
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