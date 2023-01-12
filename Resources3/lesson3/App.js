import Home from './components/home';
import Stuff from './components/stuff';
import Contact from './components/contact';
import Class from './components/class';
import Student from './components/student';
import TodoList from './components/todo_list';

function Header() {
  return (
    <div>
      <h1>Simple Single Page Application</h1>
        <ul className="header">
          
        </ul>
    </div>
  );
}

function Main() {
  return (
    <div className="content">

    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;