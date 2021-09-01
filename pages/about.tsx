import { getAboutMe, AboutProps } from "@lib/mdx";
import { GetStaticProps } from "next";
import { Icon } from "@iconify/react";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  return {
    props: await getAboutMe(),
  };
};

const About = ({ info, technicalSkills, timeline }: AboutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Leo Ding Hao - About</title>
      </Head>
      <section className="flex flex-col justify-center min-h-screen px-8 py-12 tablet:p-16 max-w-screen-lg">
        <h1 className="text-4xl font-extrabold uppercase tracking-wider font-futura text-jungle-green-500">
          About Me
        </h1>
        <div className="mt-12 space-y-20">
          <div>
            <h2 className="text-3xl font-bold uppercase font-futura tracking-wider">Bio</h2>
            <div className="mt-4 space-y-8 flex flex-col items-center aboutpage__bio">
              <MDXRemote {...info} />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold uppercase font-futura tracking-wider">
              Technical Skills
            </h2>
            <div className="mt-8 space-y-12">
              {Object.entries(technicalSkills).map(([skill, values]) => {
                return (
                  <div key={skill}>
                    <h3 className="uppercase font-semibold text-xl text-gray-400">{skill}</h3>
                    <ul className="flex flex-wrap gap-2 mt-4">
                      {values.map((value) => (
                        <li
                          key={value.name}
                          className="flex items-center py-1 bg-shark-300 px-3 rounded-full"
                        >
                          <Icon icon={value.icon} className="mr-2" />
                          {value.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-bold uppercase font-futura tracking-wider">Timeline</h2>
            <ul className="mt-8 space-y-4">
              {timeline.map(({ start, end, description, institution }, index) => (
                <li className="flex" key={index}>
                  <div className="border-r-4 border-jungle-green-500 pr-4 flex flex-col justify-between text-sm">
                    <p>{end}</p>
                    <p className="text-shark-200">{start}</p>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{institution}</h3>
                    <p className="text-gray-400 mt-2 text-sm">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
