import { ContactForm } from "@components";

const Contact = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center min-h-screen py-12 px-8 tablet:px-16 tablet:py-16">
      <h1 className="text-4xl font-bold uppercase tracking-wider font-futura text-jungle-green-500">
        Contact
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
