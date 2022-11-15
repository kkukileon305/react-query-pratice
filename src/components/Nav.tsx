import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCategories from '../hooks/useCategories';

const Nav = () => {
  const { categories, isError, isLoading, refetch, isStale } = useCategories();

  if (!categories || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-4 flex flex-col items-center'>
      <h1 onClick={() => refetch()}>Cafe</h1>
      <ul className='flex gap-4 mt-4'>
        {categories.map(category => (
          <li className='p-2 border' key={category}>
            <Link to={category}>{category}</Link>
          </li>
        ))}
      </ul>
      <p>{isStale ? 'Stale한 상태' : 'Fresh한 상태'}</p>
    </div>
  );
};
export default Nav;
