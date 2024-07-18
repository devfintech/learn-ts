import { Button } from "@/libs/ui/button"
import { Input } from "@/libs/ui/input"
import { sleep } from "@/utils/promise"
import React, { FC, useEffect, useState } from "react"
import { Difficulty, QuestionState, fetchQuizQuestions } from "./api"
import QuestionCard from "./components/QuestionCard"

const TOTAL_QUESTIONS = 10

export type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}
interface QuizAppProps {}

const QuizApp: FC<QuizAppProps> = () => {
  // const [loading, setLoading] = useState<boolean>(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState<boolean>(true)

  //   console.log(questions)

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value

      const correct = questions[number].correct_answer === answer

      if (correct) setScore((prev) => prev + 1)

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswers((prev) => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  useEffect(() => {
    console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))
  })
  const [postLink, setPostLink] = useState("")
  const [isCheckX, setIsCheckX] = useState<boolean>(false)
  const [isCheckTele, setIsCheckTele] = useState<boolean>(false)
  const [isCheckDiscord, setIsCheckDiscord] = useState<boolean>(false)
  const [xURL, setXURL] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const handleClickX = async () => {
    await sleep(5000)
    setIsCheckX(true)
  }
  const handleClickTele = async () => {
    await sleep(5000)
    setIsCheckTele(true)
  }
  const handleClickDiscord = async () => {
    await sleep(5000)
    setIsCheckDiscord(true)
  }

  const urlX = "https://x.com/"
  const checkUrl = async () => {
    if (postLink.indexOf(urlX) == 0 && postLink.length > urlX.length) {
      await sleep(5000)
      console.log("link: ", postLink)
      setLoading(true)
      setXURL(true)
    }
  }
  return (
    <>
      <div className="flex gap-2">
        <Input
          // value={}
          onChange={(e) => setPostLink(e.target.value)}
          className="rounded-none"
          placeholder="your post link"
          required={true}
        />
        {!xURL ? (
          <Button
            loading={loading}
            onClick={() => checkUrl()}
            className="bg-primary-500 flex h-[40px] min-w-[81px] cursor-pointer items-center justify-center px-2 py-4 text-base text-black hover:scale-95 "
          >
            {"Check"}
          </Button>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="#48E382" />
          </svg>
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1>Quiz App</h1>

        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <Button className="start" onClick={startTrivia}>
            Start
          </Button>
        ) : null}

        {!gameOver ? <p className="score">Score: </p> : null}

        {loading && <p>Loading Questions ...</p>}

        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestion={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <Button className="next" onClick={nextQuestion}>
            Next Question
          </Button>
        ) : null}
      </div>
    </>
  )
}

export default QuizApp
