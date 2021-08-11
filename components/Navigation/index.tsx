import MobileNavigation from "./MobileNavigation";
import TabletNavigation from "./TabletNavigation";
import DesktopNavigation from "./DesktopNavigation";
import { useRouter } from "next/router";
import useWindowSize from "@hooks/useWindowSize";

const Navigation = (): JSX.Element => {
  const { innerWidth } = useWindowSize();
  const { pathname } = useRouter();
  if (innerWidth < 600) {
    return <MobileNavigation pathname={pathname} />;
  } else if (innerWidth < 1280) {
    return <TabletNavigation pathname={pathname} />;
  } else {
    return <DesktopNavigation pathname={pathname} />;
  }
};

export default Navigation;
