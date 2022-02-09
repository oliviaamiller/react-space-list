import { useEffect, useState } from 'react';
import { getOrbs } from './services/fetch-utils';
import OrbList from './OrbList';
import './App.css';

export default function OrbPage() {
  const [orbs, setOrbs] = useState([]);
  const [page, setPage] = useState(1);
  const onPage = 19;

  useEffect(() => {
    async function fetch() {
      const from = page * onPage - onPage;
      const to = page * onPage;
      const space = await getOrbs(from, to);

      setOrbs(space);
    }
    fetch();
  }, [page]);


  return (
    <div className='page'>
      <p>page {page}</p>
      <div className='page-buttons'>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}>Previous Page</button>

        <button
          onClick={() => setPage(page + 1)}
          disabled={orbs.length < onPage}>Next Page</button>
      </div>

      <OrbList orbs={orbs}/>
    </div>
  );
}
