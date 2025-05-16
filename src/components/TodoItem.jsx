import React from 'react'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-2 py-1 text-sm text-red-600 hover:text-red-800">
        Delete
      </button>
    </div>
  )
}

export default TodoItem 