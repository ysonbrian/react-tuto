import React, { useState, useEffect } from 'react';
import { useFetch } from '../CustomHooks/useFetch';
import Fetch from './Fetch';
import UserDetails from './UserDetails';
import LoadingSpinner from './LoadingSpinner';
const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const GithubUser = ({ login }) => {
  // const { data, loading, error } = useFetch(
  //   `https://api.github.com/users/${login}`
  // );
  // }, [data]);
  // localStorage 를 이용한 fetch 방법
  /*
  const [data, setData] = useState(loadJSON(`user:${login}`));
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  // Save data to the browser
  useEffect(() => {
    if (!data) return;
    if (!data.login === login) return;
    const { name, avatar_url, location } = data;
    saveJSON(`user:${login}`, {
      name,
      login,
      avatar_url,
      location,
    });
  }, [data]);

  useEffect(() => {
    if (!login) return;
    if (data && data.login === login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(console.error);
  }, [login]); */
  // if (loading) return <h1>loading...</h1>;
  // if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  // if (!data) return null;
  // return (
  //   <div className="githubUser">
  //     <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
  //     <div>
  //       <h1>{data.login}</h1>
  //       {data.name && <p>{data.name}</p>}
  //       {data.location && <p>{data.location}</p>}
  //     </div>
  //   </div>
  // );
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      loadingFallback={<LoadingSpinner />}
      renderError={(error) => {
        return <p>Something Wwent wrong ...{error.message}</p>;
      }}
      // renderSuccess={({ data }) => (
      //   <div>
      //     <h1>Todo: Render UI for data</h1>
      //     <pre>{JSON.stringify(data, null, 2)}</pre>
      //   </div>
      // )}
      renderSuccess={UserDetails}
    />
  );
};

export default GithubUser;
