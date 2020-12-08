import React, { useEffect } from 'react';
import { useHome } from '../provider/HomeExampleProvider';

function Home() {
  const context = useHome();
  
  useEffect(() => {
    context.getData();
  }, []);

  return (
    <div>
      <p> titulo: {context.data[0].title} </p>
      <p> descrição: {context.data[0].description} </p>
    </div>
  );
}

export default Home;
