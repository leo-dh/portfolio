import React from "react";
import MobileNavigation from "./MobileNavigation";
import TabletNavigation from "./TabletNavigation";

import useWindowSize from "@/hooks/useWindowSize";

const Navigation: React.FC = () => {
  const { innerWidth } = useWindowSize();
  if (innerWidth <= 600) {
    return <MobileNavigation />;
  } else if (innerWidth <= 1280) {
    return <TabletNavigation />;
  } else {
    return <></>;
  }
};

export default Navigation;
