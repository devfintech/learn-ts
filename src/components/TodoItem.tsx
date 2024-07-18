/* eslint-disable unicorn/filename-case */
import { Todo } from "@/types/todo.type"
import { Trash2 } from "lucide-react"

interface TodoItemProps {
  todo: Todo
  onCompletedChange: (id: number, completed: boolean) => void
  onDelete: (id: number) => void
}
export default function TodoItem({ todo, onCompletedChange, onDelete }: TodoItemProps) {
  return (
    <>
      <div className="flex items-center gap-1">
        <label className="flex grow items-center gap-2 rounded-md border border-gray-400 bg-white p-2 hover:bg-slate-50">
          <input
            type="checkbox"
            required
            checked={todo.completed}
            onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
            className="scale-125"
          />
          <span className={todo.completed ? "text-stone-900 line-through" : "text-stone-900"}>{todo.title}</span>
        </label>
        <button onClick={() => onDelete(todo.id)} className="p-2">
          <Trash2 size={20} className="text-gray-500" />
        </button>
      </div>
    </>
  )
}
