import { shuffleArray } from "./ultis"

export type Question = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export type QuestionState = Question & { answers: string[] }

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
  //   const endpoint = `http://192.168.11.174:8088/auth/test?amount=${amount}&difficulty=${difficulty}&type=multiple`
  const data = await (await fetch(endpoint)).json()
  return data.results.map((question: Question) => ({
    ...question,
    anwser: shuffleArray([...question.incorrect_answers, question.correct_answer]),
  }))
}
