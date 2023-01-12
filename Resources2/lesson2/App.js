import './App.css';

import { students } from './data';
import { ListArray } from './components/lists';

function App() {
  return (
    <div>
      <ListArray students={students} />
    </div>
);
}

export default App;
