import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className='navbar'>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/about">About</Link></div>
            <div><Link to="/contact">Contact</Link></div>
        </div>
    );
}
