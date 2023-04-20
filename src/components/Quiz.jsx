import { useState } from "react"
import Quizcard from "./Quizcard.jsx"
import Quizresult from "./Quizresult.jsx"
import quizData from "../data/quiz.json"



export  default function Quiz () {
    const [showResult,setShowResult] = useState(false)
    const [quizId,setQuizId] = useState(0)
    const [score, setScore] = useState(0)
    const quizLength = quizData.length;

const handleAnswer = (isCorrect) => {
    if (isCorrect === true) setScore(score + 1)
    console.log({score})

    const newQuizId = quizId + 1
    setQuizId(newQuizId)
    
    if (newQuizId < quizLength)
    setQuizId(newQuizId)

    else
    setShowResult(true)

}

const handleReset = () => {
    setShowResult(false)
    setScore(0)
    setQuizId(0)

}

    return(
<>

{(showResult)
? (<Quizresult
    score={score}
    quizLength={quizLength}
    handleReset={handleReset} />)


: (<Quizcard quizData={quizData}
    quizId={quizId}
    quizLength={quizLength}
    handleAnswer={handleAnswer} />)
}



</>

    )
}