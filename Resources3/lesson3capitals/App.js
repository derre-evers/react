import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainMenu from './components/main_menu';

function Main() {
  return (
    <div className="content">
        <Routes>
            <Route path={'/'} element={<MainMenu />}/>
        </Routes>
    </div>
  );
}

function App() {
    return (
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    );
};

export default App;