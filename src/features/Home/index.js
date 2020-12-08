import React from 'react';
import HomePage from './page/HomeExamplePage';
import HomeProvider from './provider/HomeExampleProvider';

function Home() {
  return (
    // assim como explicado no arquivo de provider,
    // aqui consumimos o component de provider, assim que inicializado
    // todos nossos componentes filhos poderão acessar as funções e estados criados no nosso context 
    <HomeProvider>
        {/* declaração do nosso component filho */}
        <HomePage />
    </HomeProvider>
  );
}

export default Home;
