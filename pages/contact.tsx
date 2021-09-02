import { GetStaticProps } from "next";
import Head from "next/head";
import { ContactForm } from "@components";
import { getLinks, Links } from "@lib/mdx";

interface ContactProps {
  links: Links;
}

export const getStaticProps: GetStaticProps<ContactProps> = async () => {
  return {
    props: {
      links: await getLinks(),
    },
  };
};

const Contact = ({ links }: ContactProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Leo Ding Hao - Contact</title>
      </Head>
      <section className="flex flex-col justify-center min-h-screen py-12 px-8 tablet:px-16 tablet:py-16">
        <h1 className="text-4xl font-extrabold uppercase tracking-wider font-futura text-jungle-green-500">
          Contact
        </h1>
        <ContactForm links={links} />
      </section>
    </>
  );
};

export default Contact;
