import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from '@/components/Home';
import './App.css';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
