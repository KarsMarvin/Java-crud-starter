import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import EditForm from "./components/EditForm";

function App() {
  return (
    <Router>
    {/* <Navbar /> */}
      <Routes>
        <Route path="/" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/edit" exact element={<EditForm />} />
        
       
      </Routes>
    </Router>
  );
}

export default App;
