import React, { useState } from 'react'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState([])
  const [editingUser, setEditingUser] = useState(null)

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }])
  }

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ))
    setEditingUser(null)
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const startEditing = (user) => {
    setEditingUser(user)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          User Management System
        </h1>
        
        <UserForm 
          onSubmit={editingUser ? updateUser : addUser}
          initialData={editingUser}
          key={editingUser?.id || 'new'}
        />

        <UserList 
          users={users}
          onEdit={startEditing}
          onDelete={deleteUser}
        />
      </div>
    </div>
  )
}

export default App 