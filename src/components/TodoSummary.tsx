/* eslint-disable unicorn/filename-case */
import { Todo } from "@/types/todo.type"
interface TodoSummaryProps {
  todos: Todo[]
  deleteAllCompleted: () => void
}

export default function TodoSummary({ todos, deleteAllCompleted }: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed)

  return (
    <>
      <div className="space-y-2 text-center">
        <p className="text-sm font-medium">
          {completedTodos.length}/{todos.length} todos completed
        </p>
        {completedTodos.length > 0 && (
          <button
            className="rounded-[5px] border border-solid border-red-500 p-2 text-sm font-medium text-red-500 hover:bg-white "
            onClick={deleteAllCompleted}
          >
            Delete all completed
          </button>
        )}
      </div>
    </>
  )
}
