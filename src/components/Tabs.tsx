import { Link, Outlet, useParams } from 'react-router-dom';
import { tabs } from '../tabs';

export const Tabs = () => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === tabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
