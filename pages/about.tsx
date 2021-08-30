import Head from "next/head";
const About = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Leo Ding Hao - About</title>
      </Head>
      <section className="flex flex-col justify-center min-h-screen px-8 py-12 tablet:p-16">
        <h1 className="text-4xl font-extrabold uppercase tracking-wider font-futura text-jungle-green-500">
          About Me
        </h1>
        <p className="text-5xl font-bold mt-16 ">WORK IN PROGRESS ... </p>
      </section>
    </>
  );
};

export default About;
