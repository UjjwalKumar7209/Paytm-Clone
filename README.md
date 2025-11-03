# Paytm Clone

A full-stack payment application clone built with React and Node.js that allows users to transfer money between accounts.

## Features

- 🔐 User authentication (signup/signin)
- 💰 Check balance
- 👥 View other users
- 💸 Transfer money to other users
- 🔒 Protected routes
- 🚪 Session management with JWT

## Tech Stack

### Frontend
- React
- React Router for navigation
- Axios for API calls
- Tailwind CSS for styling

### Backend
- Node.js & Express
- MongoDB with Mongoose
- JWT for authentication
- Zod for validation

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB account (for connection string)
- Git

### Backend Setup
1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in backend directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the server:
```bash
npm start
# or
nodemon index.js
```

Server will run on http://localhost:3000

### Frontend Setup
1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Frontend will run on http://localhost:5173

## API Routes

### User Routes
- POST `/api/v1/user/signup` - Register new user
- POST `/api/v1/user/signin` - Login user
- GET `/api/v1/user/bulk` - Get list of all users
- PUT `/api/v1/user` - Update user info

### Account Routes
- GET `/api/v1/account/balance` - Get user's balance
- POST `/api/v1/account/transfer` - Transfer money to another user

## Features Walkthrough

1. **Sign Up**
   - Create new account with email and password
   - Automatically redirects to dashboard
   - JWT token stored in localStorage

2. **Sign In**
   - Login with registered email/password
   - Protected routes redirect to signin if not authenticated

3. **Dashboard**
   - View your balance
   - See list of other users
   - Search users by name
   - Initiate money transfer

4. **Money Transfer**
   - Click "Send Money" on any user
   - Enter amount
   - Confirms transaction and updates balance
   - Redirects back to dashboard

5. **Profile & Logout**
   - View profile in top bar
   - Logout button removes session
   - Auto-redirects to signin

## Project Structure

```
paytm-clone/
├── backend/
│   ├── routes/
│   │   ├── account.js
│   │   ├── user.js
│   │   └── index.js
│   ├── db.js
│   ├── middleware.js
│   └── index.js
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── App.jsx
    └── index.html
```

## Security Features

- Passwords stored securely
- JWT for session management
- Protected routes in frontend
- Environment variables for secrets
- Input validation with Zod

## Known Limitations

- Basic error handling
- No password recovery
- Simple UI/UX
- No email verification
- No transaction history

## Future Improvements

- Add transaction history
- Implement password reset
- Add email verification
- Improve error messages
- Add loading states
- Add proper testing