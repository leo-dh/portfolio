import { HTMLProps } from "react";

interface LinkButtonProps extends HTMLProps<HTMLAnchorElement> {
  label: string;
  icon: JSX.Element;
}
const LinkButton = ({ label, icon, ...props }: LinkButtonProps): JSX.Element => (
  <a
    className="flex items-center justify-center flex-col space-y-2 bg-shark-400 text-shark-200 rounded-lg py-6 w-20 tablet:w-24 hover:text-primary-500 duration-300 ease-in-out hover:scale-[1.02]"
    {...props}
  >
    {icon}
    <span className="text-sm rounded-lg uppercase font-semibold tracking-wide">{label}</span>
  </a>
);

export default LinkButton;
