import React from 'react';
import './App.css';
import './components/Head/Head.css';
import './components/Cooperators/Cooperators.css';
import './components/Counter/Counter.css';
import './components/Reasons/Reasons.css';
import './components/Stories/Stories.css';
import './components/TechStack/Tech.css';
import './components/Stack/Stack.css';
import './components/Join/Join.css';
import './components/Form/Form.css';
import './components/Free/Free.css';
import './components/Footer/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './components/Head/Head'
import Cooperators from './components/Cooperators/Cooperators'
import Counter from './components/Counter/Counter'
import Reasons from './components/Reasons/Reasons'
import Stories from './components/Stories/Stories'
import Tech from './components/TechStack/Tech'
import Stack from './components/Stack/Stack'
import Join from './components/Join/Join'
import Free from './components/Free/Free'
import FormEmail from './components/Form/Form'
import Footer from './components/Footer/Footer'

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
      <Join />
      <Free />
      <FormEmail />
      <Footer />
    </>
  );
}

export default App;
