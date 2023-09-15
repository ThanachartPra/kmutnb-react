import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "./QuestionsData";

const Score = () => {
    const {score, setScore, setAppState} = useContext(DataContext)

    const restartApp = () =>{
        setScore(0)
        setAppState("menu")
    }
    return(
        <div className="score">
            <h1>สรุปผลคะแนน</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>ทำแบบทดสอบใหม่อีกครั้ง</button>
        </div>
    )
}
export default Score;