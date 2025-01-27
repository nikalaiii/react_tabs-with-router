import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import 'bulma/css/bulma.css';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Tabs } from './components/Tabs';

export const App = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={`navbar-item ${isActive('/') ? 'is-active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={`navbar-item ${isActive('/tabs') ? 'is-active' : ''}`}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/" element={<h1 className="title">Home page</h1>} />
            <Route path="/tabs">
              <Route index element={<Tabs />} />
              <Route path=":tabId?" element={<Tabs />} />
            </Route>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
