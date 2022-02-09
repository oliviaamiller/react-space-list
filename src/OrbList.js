import Orb from './Orb';

export default function OrbList({ orbs }) {
  return (
    <div className='orb-list'>
      {orbs.map((orb, i) => 
        <Orb key={`${orb}-${i}`} orb={orb} />)}
        
    </div>
  );
}
