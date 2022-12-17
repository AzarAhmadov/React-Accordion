import { useState } from 'react';
import './App.css';
import Faq from './components/Faq';

function App() {

  const [active, setActive] = useState('')

  return (
    <div className="App">
      <h1> React Accardion project </h1>
      <Faq title='Question 1' active={active} setActive={setActive} />
      <Faq title='Question 2' active={active} setActive={setActive} />
      <Faq title='Question 3' active={active} setActive={setActive} />
      <Faq title='Question 4' active={active} setActive={setActive} />
    </div>
  );
}

export default App;
