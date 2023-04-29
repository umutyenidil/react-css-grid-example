import React, {useEffect} from "react";
import './App.css';
import HomePage from "./pages/HomePage";

function App() {
    useEffect(() => {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
        document.head.appendChild(link)
    }, []);

    return (
        <div>
            <HomePage/>
        </div>
    );
}

export default App;
