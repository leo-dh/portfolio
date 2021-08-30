import Head from "next/head";
import { ContactForm } from "@components";

const Contact = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Leo Ding Hao - Contact</title>
      </Head>
      <section className="flex flex-col justify-center min-h-screen py-12 px-8 tablet:px-16 tablet:py-16">
        <h1 className="text-4xl font-extrabold uppercase tracking-wider font-futura text-jungle-green-500">
          Contact
        </h1>
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
