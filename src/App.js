import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout/Layout'
import MoviesContainer from './Containers/MoviesContainers'

function App() {
  return (
    <div className="App">
      <Layout>
      <MoviesContainer/>
      </Layout>
    </div>
  );
}

export default App;
