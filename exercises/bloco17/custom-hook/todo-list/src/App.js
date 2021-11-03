import { Switch, Route } from 'react-router-dom';
import './App.css';
import TodoInput from './components/TodoInput';

function App() {
  return (
    <Switch>
      <Route path='/' component={ TodoInput} />
    </Switch>
  );
}

export default App;
