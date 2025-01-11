import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Home = () => {
  const { name } = useContext(AuthContext);
  return (
    <div>
      this is home
      {name}
    </div>
  );
};

export default Home;
