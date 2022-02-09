import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleOrb } from './services/fetch-utils';
import './App.css';

export default function OrbDetail() {
  const [thisOrb, setThisOrb] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      console.log(params.name);

      const singleOrb = await getSingleOrb(params.name);

      setThisOrb(singleOrb);
    }

    fetch();
  }, [params.name]);

  return (
    <div>
      <Link to='/'>Home</Link>
      <div className='orb-detail'>
        <p className='orb-name'>{thisOrb.name}</p>
        <p>{thisOrb.bodyType}</p>
        <p>discovered by: {thisOrb.discoveredBy}</p>
        <p>discovered: {thisOrb.discoveryDate}</p>
        <p>escape: {thisOrb.escape}</p>
        <p>mean radius: {thisOrb.meanRadius}</p>
        <p>semi-major axis: {thisOrb.semimajorAxis}</p>
        <p>sideral orbit:{thisOrb.sideralOrbit}</p>
        <p>perihelion: {thisOrb.perihelion}</p>
        <p>sideral Rotation:{thisOrb.sideralRotation}</p>
        <p>aphelion: {thisOrb.aphelion}</p>
        <p>eccentricity: {thisOrb.eccentricity}</p>
        <p>inclination: {thisOrb.inclination}</p>
        <p>mass value: {thisOrb.massValue}</p>
        <p>mass exponent: {thisOrb.massExponent}</p>
        <p>density: {thisOrb.density}</p>
        <p>gravity: {thisOrb.gravity}</p>
      </div>
    </div>
  );
}









