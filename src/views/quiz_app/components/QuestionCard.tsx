/* eslint-disable unicorn/filename-case */
import { Button } from "@/libs/ui/button"
import { FC } from "react"
import { AnswerObject } from ".."

type QuestionCardProps = {
  question: string
  answers: string[]
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void
  userAnswer: AnswerObject | undefined
  questionNr: number
  totalQuestion: number
}
const QuestionCard: FC<QuestionCardProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestion,
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNr} / {totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => (
          <>
            <div key={answer}>
              <Button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </Button>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default QuestionCard
