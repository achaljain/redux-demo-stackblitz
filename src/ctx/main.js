import React, { useContext, useEffect } from 'react';
import { getContext } from 'smart-context';
import { CTR } from '../callback';
import User from './userForm';
import Counter from './counter';

const Main = () => {
  const { state, actions } = useContext(getContext('demo'));

  const { user } = state;
  const { setUser, setCounter } = actions;

  const addUser = (name) => {
    setUser({
      user: {
        name,
      },
      counter: 0,
    });
  };

  useEffect(() => {
    if (user) {
      let i = 0;
      while (i <= CTR) {
        setCounter({ counter: i });
        i++;
      }
    }
  }, [user]);

  if (!user) {
    return null;
  }

  const { name } = user;

  return (
    <>
      <User name={name} updateHandler={addUser} />
      <Counter name={name} counter={counter} />
    </>
  );
};

export default Main;
