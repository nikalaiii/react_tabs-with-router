import { Link } from 'react-router-dom';
import { tabs } from '../tabs';
import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import classNames from 'classnames';

export const Tabs = () => {
  const { tabId } = useParams();
  let selectedTab: Tab | null | undefined = null;

  if (tabId) {
    selectedTab = tabs.find(t => t.id === tabId);
  }

  return (
    <div className="block">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === tab.id })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div data-cy="TabContent">
        {selectedTab ? (
          <p>{selectedTab.content}</p>
        ) : (
          <p>Please select a tab</p>
        )}
      </div>
    </div>
  );
};
