import React, { useContext, createContext, useState } from "react";
import { useService } from '../../../core/service/provider/provider';

/** 
 * aqui declaramos o context da nossa pagina
 * no caso o context seria um gerenciador de estados
 * outro gerenciador de estados muito usado é o redux
 * em comparação o context é mais simples de se usar 
 * seu maior beneficio é justamente isso, simplicidade
 * o porque de se usar o context? geralmente o react tem um problema
 * compartilhamento de dados entre components, dependendo da complexidade 
 * o gerenciamento desses dados acabam se tornando uma verdadeira zona
 */
const homeContext = createContext();
  
function useProviderHome() {
    //aqui setamos a variavel responsavel pela camada de serviço
    const service = useService();
    // aqui setamos o estado de data e o método responsavel por seta-la
    const [data, setData] = useState([]);
    
    async function getData(){
      try {
        // neste momento fazemos um requisição do tipo get para api
        // lembre-se sempre de utilizar funções async, senão ao chamar a api deveremos tratar a responsavel como promisse
        const { data } = await service.get('/coding');
        // ao receber a resposta da api, setamos o estado "data"
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };

    return {
      data,
      setData,
      getData
    };
}

// aqui criamos um component no qual vai fornencer os estados para todos os components filhos
export default function Provider({ children }) {
  const provider = useProviderHome();

  return (
    <homeContext.Provider value={provider}>
      {children}
    </homeContext.Provider>
  );
}

export function useHome() {
    return useContext(homeContext);
}
