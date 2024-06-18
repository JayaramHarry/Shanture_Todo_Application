Todo Application:
This is a full-stack Todo application built with Node.js, Express, MongoDB for the backend, and React for the frontend.

Requirements:
    1. Node.js
    2. MongoDB
    3. Git

### Setup Instructions:
Clone the Repository:
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

### Backend Setup:

1. Navigate to the backend directory:
    cd backend

2. Install backend dependencies:
    npm install

3. Create a .env file in the backend directory and add your MongoDB connection string:

    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.oauazva.mongodb.net/todo?retryWrites=true&w=majority
    PORT=5000

4. Start the backend server:
    npm start
    
    The backend server will be running on http://localhost:5000.


### Frontend Setup:

1. Navigate to the frontend directory:
    cd ../frontend

2. Install frontend dependencies:
    npm install

3. Create a .env file in the frontend      directory and add your backend URL (if different from default):
    REACT_APP_BACKEND_URL=http://localhost:5000

4. Start the frontend development server:
    npm start
    The frontend server will be running on http://localhost:3000.

### Running the Application
    1. Ensure the backend server is running on http://localhost:5000.
    
    2. Ensure the frontend server is running on http://localhost:3000.
    
    You can now open your browser and navigate to http://localhost:3000 to use the Todo application.