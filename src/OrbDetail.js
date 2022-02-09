import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleOrb } from './services/fetch-utils';

export default function OrbDetail() {
  const [thisOrb, setThisOrb] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      const singleOrb = await getSingleOrb(params.name);

      setThisOrb(singleOrb);
    }

    fetch();
  }, [params.id]);

  return (
    <div>
      <Link to='/'>Home</Link>
      <div className='orb-detail'>
        <p>{thisOrb.name}</p>
        <p>{thisOrb.escape}</p>
        <p>{thisOrb.meanRadius}</p>
        <p>{thisOrb.semimajorAxis}</p>
        <p>{thisOrb.sideralOrbit}</p>
        <p>{thisOrb.perihelion}</p>
        <p>{thisOrb.sideralRotation}</p>
        <p>{thisOrb.aphelion}</p>
        <p>{thisOrb.discoveredBy}</p>
        <p>{thisOrb.eccentricity}</p>
        <p>{thisOrb.discoveryDate}</p>
        <p>{thisOrb.inclination}</p>
        <p>{thisOrb.bodyType}</p>
        <p>{thisOrb.massValue}</p>
        <p>{thisOrb.massExponent}</p>
        <p>{thisOrb.density}</p>
        <p>{thisOrb.gravity}</p>
      </div>
    </div>
  );
}









