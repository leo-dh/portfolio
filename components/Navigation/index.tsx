import React from "react";
import MobileNavigation from "./MobileNavigation";
import TabletNavigation from "./TabletNavigation";
import DesktopNavigation from "./DesktopNavigation";

import useWindowSize from "@/hooks/useWindowSize";

const Navigation = (): JSX.Element => {
  const { innerWidth } = useWindowSize();
  if (innerWidth < 600) {
    return <MobileNavigation />;
  } else if (innerWidth < 1280) {
    return <TabletNavigation />;
  } else {
    return <DesktopNavigation />;
  }
};

export default Navigation;
