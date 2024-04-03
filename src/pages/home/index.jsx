import Form from '../../components/form';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main className="main-container">
            <Link to="/employee">Employee list</Link>
            <Form />
        </main>
    );
}

export default Home;
