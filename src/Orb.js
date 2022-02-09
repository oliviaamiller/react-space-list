import { Link } from 'react-router-dom';
import './App.css';

export default function Orb({ orb }) {
  return (
    <Link to={`/orbs/${orb.name}`}>
      <div className='orb'>
        <p>{orb.name}</p>
        <p>{orb.bodyType}</p>
        <p>{orb.discoveryDate}</p>
        <p>more info...</p>

      </div>
    </Link>
 
  );
}
