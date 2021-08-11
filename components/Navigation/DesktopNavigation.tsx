import ROUTES from "@utils/routes";
import Link from "next/link";
import { ContactIcon } from "../Icons";

const DesktopNavigation = (): JSX.Element => {
  return (
    <nav className="fixed w-[320px] bg-jungle-green-500 h-full">
      <ul className="flex flex-col items-end justify-center h-full px-8 space-y-2 text-2xl">
        {ROUTES.map(({ href, title }) => {
          return href === "/contact" ? (
            <li key={href}>
              <Link href={href}>
                <a className="flex uppercase font-bold bg-jungle-green-200 rounded-md overflow-hidden items-center mt-4">
                  <div className="bg-jungle-green-600 p-2 text-white">
                    <ContactIcon />
                  </div>
                  <span className="mx-3 text-shark-700 text-right">{title}</span>
                </a>
              </Link>
            </li>
          ) : (
            <li key={href} className="py-2 uppercase font-bold text-shark-700">
              <Link href={href}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
