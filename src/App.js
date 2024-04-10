import Footer from './components/footer';
import Header from './components/header';
import Employee from './pages/employee';
import Home from './pages/home';
import ModalTest from './pages/modal';
import './styles/main.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/modal" element={<ModalTest />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

