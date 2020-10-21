import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ClienteList } from './components/cliente/ClienteList';
import ClienteListHooks from './components/cliente/ClienteListHooks';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './custom.css'

//export default class App extends Component {
//  static displayName = App.name;

//  render () {
//    return (
//      <Layout>
//        <Route exact path='/' component={Home} />
//        <Route path='/counter' component={Counter} />
//        <Route path='/fetch-data' component={FetchData} />
//        <Route path='/ClienteList' component={ClienteList}/>
//      </Layout>
//    );
//    }

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetch-data' component={FetchData} />
    <Route path='/ClienteList' component={ClienteList} />
    <Route path='/ClienteListHooks' component={ClienteListHooks} />
  </Layout>
);

