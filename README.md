# React User Management System

A modern React application for managing user records with CRUD (Create, Read, Update, Delete) operations. Built with React and styled with Tailwind CSS.

## Features

### 1. User Management
- **Create Users**: Add new users with details like name, email, phone, and role
- **Read Users**: View all users in a responsive table format
- **Update Users**: Edit existing user information
- **Delete Users**: Remove users from the system

### 2. User Information
Each user record includes:
- Full Name
- Email Address
- Phone Number
- Role (User/Admin/Editor)

### 3. UI Features
- Responsive design that works on all screen sizes
- Clean and modern interface
- Interactive form validation
- Color-coded role badges
- Smooth transitions and hover effects
- Grid layout for form fields
- Professional table design

## Project Structure

```
src/
├── components/
│   ├── UserForm.jsx    # Form component for adding/editing users
│   └── UserList.jsx    # Table component for displaying users
├── App.jsx            # Main application component
├── main.jsx          # Application entry point
└── index.css         # Global styles and Tailwind imports
```

## Component Details

### 1. App.jsx
- Main application component
- Manages state for users array and editing mode
- Handles CRUD operations through functions:
  - `addUser`: Creates new users
  - `updateUser`: Modifies existing users
  - `deleteUser`: Removes users
  - `startEditing`: Initiates edit mode

### 2. UserForm.jsx
- Handles both creation and editing of users
- Features:
  - Dynamic form state management
  - Input validation
  - Responsive grid layout
  - Automatic form reset after submission
  - Role selection dropdown
  - Switches between Add/Update modes

### 3. UserList.jsx
- Displays users in a table format
- Features:
  - Sortable columns
  - Color-coded role badges
  - Edit and Delete actions
  - Responsive table design
  - Empty state handling

## Setup Instructions

1. **Prerequisites**
   - Node.js (v14 or higher)
   - npm or yarn

2. **Installation**
   ```bash
   # Clone the repository (if applicable)
   git clone <repository-url>

   # Navigate to project directory
   cd react-user-management

   # Install dependencies
   npm install
   ```

3. **Running the Application**
   ```bash
   # Start development server
   npm run dev
   ```
   Open http://localhost:5173 in your browser

4. **Building for Production**
   ```bash
   # Create production build
   npm run build
   ```

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Next-generation frontend tooling
- **React Hooks**: useState and useEffect for state management

## Code Examples

### Adding a New User
```javascript
const addUser = (user) => {
  setUsers([...users, { ...user, id: Date.now() }])
}
```

### Updating a User
```javascript
const updateUser = (updatedUser) => {
  setUsers(users.map(user => 
    user.id === updatedUser.id ? updatedUser : user
  ))
}
```

## Styling

The project uses Tailwind CSS for styling with:
- Responsive grid layouts
- Custom color schemes
- Shadow effects
- Hover and focus states
- Form input styling
- Table design

## Future Enhancements

1. **Data Persistence**
   - Add localStorage support
   - Implement backend API integration

2. **Authentication**
   - User login/logout
   - Role-based access control

3. **Additional Features**
   - Search functionality
   - Sort by columns
   - Bulk actions
   - Pagination
   - Export to CSV/Excel

4. **UI Improvements**
   - Dark mode support
   - Custom themes
   - Animation effects
   - Loading states

## Contributing

Feel free to fork this project and submit pull requests. You can also open issues for bugs or feature requests.

## License

MIT License - feel free to use this project for personal or commercial purposes. 