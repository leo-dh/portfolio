import React, { SVGProps } from "react";

const Icon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <svg fill="currentColor" width="24" height="24" {...props} />;
};

export const HandWavingIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <Icon
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35.4576 10.3818C34.3858 9.63264 32.7701 9.77631 31.8078 10.571L32.9115 8.96675C33.7997 7.69996 33.4816 6.3294 32.2137 5.44003C30.9457 4.55407 27.3529 6.936 27.3529 6.936C28.2491 5.65667 28.0815 4.03527 26.8022 3.13791C25.5228 2.24397 23.7578 2.55297 22.8615 3.83459L10.9804 20.6187L12.4946 35.2991L25.1317 30.6903L36.1543 14.3475C37.0585 13.0602 36.7461 11.2848 35.4576 10.3818Z"
        fill="#EF9645"
      />
      <path
        d="M37.9272 19.7191C37.9272 19.7191 39.218 17.8377 37.3355 16.5481C35.4552 15.2585 34.1656 17.1387 34.1656 17.1387L28.1783 25.8706C27.9719 25.5263 27.7462 25.1865 27.4942 24.8512L35.8041 12.7341C35.8041 12.7341 37.0937 10.8538 35.2124 9.56422C33.3321 8.27463 32.0425 10.1549 32.0425 10.1549L24.2263 21.5537C23.9355 21.3165 23.6379 21.0782 23.3312 20.8445L32.3926 7.62812C32.3926 7.62812 33.6822 5.74788 31.8008 4.45829C29.9206 3.16869 28.631 5.04892 28.631 5.04892L19.5696 18.263C19.2366 18.0589 18.9071 17.8822 18.5765 17.6952L27.0461 5.34424C27.0461 5.34424 28.3357 3.46401 26.4554 2.17441C24.5752 0.884816 23.2856 2.76505 23.2856 2.76505L14.3302 15.8252L12.9688 17.8115C18.6107 21.6814 19.1477 28.9618 15.9243 33.6629C15.2801 34.6036 14.3394 33.9594 14.3394 33.9594C18.2082 28.3164 17.0269 21.9756 11.3839 18.1068L13.0475 9.78087C13.0475 9.78087 13.6689 7.58707 11.4763 6.96451C9.28246 6.34308 8.6599 8.53688 8.6599 8.53688L6.73862 14.2426C5.97695 16.5048 5.16625 18.759 4.09329 20.8912C1.06371 26.9116 2.87325 34.3938 8.58579 38.3128C14.8171 42.5852 23.3358 40.9969 27.6093 34.7667L37.9272 19.7191Z"
        fill="#FFDC5D"
      />
      <path
        d="M27.3169 36.4873C31.8778 36.4873 36.4866 31.8785 36.4866 27.3175C36.4866 26.687 36.9484 26.1773 37.579 26.1773C38.2095 26.1773 38.7671 26.687 38.7671 27.3175C38.7671 34.1589 34.1583 38.7677 27.3169 38.7677C26.6864 38.7677 26.1767 38.2101 26.1767 37.5796C26.1767 36.949 26.6864 36.4873 27.3169 36.4873Z"
        fill="#5DADEC"
      />
      <path
        d="M33.0184 38.7198C36.4391 38.7198 38.7195 36.4394 38.7195 33.0187C38.7195 32.3881 39.2292 31.8784 39.8598 31.8784C40.4903 31.8784 41 32.3881 41 33.0187C41 37.5796 37.5793 41.0003 33.0184 41.0003C32.3879 41.0003 31.8782 40.4906 31.8782 39.86C31.8782 39.2295 32.3879 38.7198 33.0184 38.7198ZM13.6346 2.23256C14.264 2.23256 14.7748 2.74338 14.7748 3.37279C14.7748 4.00219 14.264 4.51301 13.6346 4.51301C9.07366 4.51301 4.51275 8.60529 4.51275 13.6348C4.51275 14.2642 4.00193 14.7751 3.37252 14.7751C2.74312 14.7751 2.2323 14.2642 2.2323 13.6348C2.2323 7.34762 6.79321 2.23256 13.6346 2.23256Z"
        fill="#5DADEC"
      />
      <path
        d="M7.9335 0C8.56291 0 9.07373 0.462932 9.07373 1.09234C9.07373 1.72174 8.56291 2.28045 7.9335 2.28045C4.51282 2.28045 2.28026 4.81746 2.28026 7.9337C2.28026 8.5631 1.72269 9.07392 1.09214 9.07392C0.461598 9.07392 -0.000193596 8.5631 -0.000193596 7.9337C-0.000193596 3.55865 3.3726 0 7.9335 0Z"
        fill="#5DADEC"
      />
    </Icon>
  );
};

export const OfficalGitHubIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </Icon>
  );
};

export const GitHubIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <Icon
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
    </Icon>
  );
};

export const MailIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <Icon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" /> <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </Icon>
  );
};

export const MenuIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <Icon className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </Icon>
  );
};

export const ChevronRightIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <Icon className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </Icon>
  );
};

export const CrossIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <Icon fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </Icon>
  );
};

export const AboutIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <Icon fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Icon>
  );
};

export const ContactIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <Icon fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </Icon>
  );
};
