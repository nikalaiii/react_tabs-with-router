import { useParams } from 'react-router-dom';
import { tabs } from '../tabs';

export const TabContent = () => {
  const { tabId } = useParams();
  const tab = tabs.find(t => t.id === tabId);

  if (!tab) {
    return <p>Tab not found</p>;
  }

  return <p>{tab.content}</p>;
};
