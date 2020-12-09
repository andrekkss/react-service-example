import React, { useEffect } from 'react';
import { useHome } from '../provider/HomeExampleProvider';

function Home() {
  // ao inicializar o component filho, adicionamos um variavel que vai ser responsavel por acessar o context da pagina
  // no nosso caso é o context da home page, onde podemos encontrar a variavel data e o metodo getData, no qual vai chamar api para receber os dados
  const context = useHome();
  
  // o useEffect é um método de lifeCycle, neste caso ao inicializar a pagina este método ira executar algo
  // este algo no nosso caso é o getData
  useEffect(() => {
    // chamando nossa api para receber os dados
    context.getData();
  }, []);

  return (
    <div>
      {/* para acessarmos os dados em nosso component, vamos utilizar o nosso estado data
        caso queira se lembrar é este estado: https://github.com/andrekkss/react-service-example/blob/640c0b5169ae1652b7bd77a29c604904b5850993/src/features/Home/provider/HomeExampleProvider.js#L20
        ele é setado em nosso método context.getData, caso queira ver o codigo: https://github.com/andrekkss/react-service-example/blob/640c0b5169ae1652b7bd77a29c604904b5850993/src/features/Home/provider/HomeExampleProvider.js#L22
        como magica temos o resultado do retorno da api!
        lembre-se sempre de tratar erros e formatações!
      */}
      <p> titulo: {context.data[0].title} </p>
      <p> descrição: {context.data[0].description} </p>
    </div>
  );
}

export default Home;
