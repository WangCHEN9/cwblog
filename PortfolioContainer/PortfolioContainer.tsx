import { TOTAL_SCREENS } from '../utilities/commonUtils';
import React from 'react';

const PortfolioContainer = () => {
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) =>
      screen.component ? (
        <screen.component
          // screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };
  return <div>{mapAllScreens()}</div>;
};

export default PortfolioContainer;
