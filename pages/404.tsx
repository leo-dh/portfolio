import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function ErrorPage(): JSX.Element {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((state) => state - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (countdown === 0) router.push("/");
  }, [countdown, router]);
  return (
    <>
      <section className="flex flex-col min-h-screen px-8 py-12 tablet:p-16 max-w-screen-lg justify-center">
        <h1 className="text-4xl font-extrabold text-primary-500">
          Uh oh... <br />
          The page can&apos;t be found.
        </h1>
        <p className="mt-4 font-semibold text-lg">redirecting to main page in {countdown}s</p>
        <div className="mt-16 desktop:hidden">
          <Link href="/">
            <a className="mt-4 bg-shark-400 px-4 py-2 rounded-lg font-semibold">
              Return to main page
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}
