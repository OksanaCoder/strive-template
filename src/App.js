import React from 'react';
import './App.css';
import './components/Head/Head.css';
import './components/Cooperators/Cooperators.css';
import './components/Counter/Counter.css';
import './components/Reasons/Reasons.css';
import './components/Stories/Stories.css';
import './components/TechStack/Tech.css';
import './components/Stack/Stack.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './components/Head/Head'
import Cooperators from './components/Cooperators/Cooperators'
import Counter from './components/Counter/Counter'
import Reasons from './components/Reasons/Reasons'
import Stories from './components/Stories/Stories'
import Tech from './components/TechStack/Tech'
import Stack from './components/Stack/Stack'
function App() {
  return (
    <>

      <Head />
      <Cooperators />
      <Counter />
      <Reasons />
      <Stories />
      <Tech />
      <Stack />
    </>
  );
}

export default App;
