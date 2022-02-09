import { Link } from 'react-router-dom';
import './App.css';

export default function Orb({ orb }) {
  return (
    <div className='orb'>
      <Link to={`/orbs/${orb.name}`}>
        <p className='orb-name'>{orb.name}</p>
        <p>{orb.bodyType}</p>
        <p>{orb.discoveryDate}</p>
        <p>more info...</p>  
      </Link>
    </div>
 
  );
}
