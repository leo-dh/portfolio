import Head from "next/head";
interface MetaTagsProps {
  title?: string;
  description?: string;
}
const defaultValues = {
  title: "Portfolio - Leo Ding Hao",
  description:
    "Hey there! My name is Leo Ding Hao and I am an aspiring software engineer who is interested in front-end development. Click to find out more!",
};

const MetaTags = ({
  title = defaultValues.title,
  description = defaultValues.description,
}: MetaTagsProps): JSX.Element => {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="title" content={title} key="meta-title" />
      <meta name="description" content={description} key="description" />
    </Head>
  );
};

export default MetaTags;
