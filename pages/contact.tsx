import { GetStaticProps } from "next";
import { ContactForm, MetaTags } from "@components";
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
      <MetaTags
        title="Contact Me - Leo Ding Hao"
        description="You can leave a message for me here if it is not urgent. Otherwise, you can also contact me via email as well."
      />
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
