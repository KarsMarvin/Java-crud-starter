import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import EditForm from "./components/EditForm";
import ProductsList from "./pages/ProductList";
import Cart from "./pages/Cart";

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
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/products" exact element={<ProductsList />} />
        
       
      </Routes>
    </Router>
  );
}

export default App;
