import { NavLink, Outlet } from 'react-router-dom';
import NavigateBackButton from '../components/NavigateBackButton.jsx';

const RootLayout = ({ data }) => {
  return (
    <div className="navbar">
      <header>
        <nav>
          <span>
            <NavLink to="/">Home</NavLink>
          </span>

          {data.map((dataElement) => (
            <NavLink key={dataElement.id} to={`/content/${dataElement.id}`}>
              {dataElement.title}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <div>
          <Outlet />
        </div>
        <NavigateBackButton />
      </main>
    </div>
  );
};

export default RootLayout;
