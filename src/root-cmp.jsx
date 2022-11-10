import './styles/main.scss';
import { SideNav } from './cmps/side-nav.jsx'
import { Routes, Route } from 'react-router'
import routes from './routes'


function App() {
  return (
    <div className="app-container">
      <SideNav />
      <Routes>
        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
      </Routes>
    </div>
  );
}

export default App;
