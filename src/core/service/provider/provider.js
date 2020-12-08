import React, { useContext, createContext } from "react";
import { get, post, del, update, setAuth } from '../base/base_axios';

/** For more details on
 * `serviceContext`, `useService` and `useProviderService`
 * refer to: https://usehooks.com/useAuth/
 */
const serviceContext = createContext();

const service = {
    get(url) {
        return get(url);
    },
    post(url, data){
        return post(url, data);
    },
    del(url){
        return del(url);
    },
    update(url, data){
        return update(url, data);
    },
    setAuth(token){
        setAuth(token);
    },
};
  

function useProviderService() {
    const get = (url) => {
        return service.get(url);
    };

    const post = (url, data) => {
        return service.post(url, data);
    };

    const del = (url) => {
        return service.del(url);
    };

    const update = (url, data) => {
        return service.update(url, data);
    };

    const auth = token => {
        service.setAuth(token);
    };

    return {
      get,
      post,
      del,
      update,
      auth
    };
}

export default function Provider({ children }) {
  const service = useProviderService();

  return (
    <serviceContext.Provider value={service}>
      {children}
    </serviceContext.Provider>
  );
}

export function useService() {
    return useContext(serviceContext);
}
