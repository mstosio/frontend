import React from 'react';
import loader from 'redux/reducers/loader';
import { store } from 'redux/store';
import Spinner from '../../components/atoms/Spinner';

const ReduxTestComponent = (): JSX.Element => {
  const showLoader = store.getState().loader.isLoading;
  const { show, hide } = loader.actions;
  return (
    <>
      {!showLoader ? null : <Spinner />}
      <button type="button" onClick={() => store.dispatch(show())}>
        Show loader
      </button>
      <button type="button" onClick={() => store.dispatch(hide())}>
        Hide loader
      </button>
    </>
  );
};

export default ReduxTestComponent;
