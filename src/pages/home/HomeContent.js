import { useState } from 'react';

import Greeting from '../../components/Greeting';
import Welcome from '../../components/Welcome';

const HomeContent = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  const renderContent = () => {
    let content;

    if (showWelcome) {
      content = <Welcome user="James Bond" age={7} />;
    } else {
      content = <Greeting title="Title" subTitle="Subtitle" />;
    }

    return content;
  };

  const handleClick = () => {
    console.log('__showWelcome__', showWelcome);
    setShowWelcome(!showWelcome);
  };

  return (
    <div>
      <button className="btn btn-outline-primary" onClick={handleClick}>
        Do something
      </button>
      <hr />
      {renderContent()}
    </div>
  );
};

export default HomeContent;
