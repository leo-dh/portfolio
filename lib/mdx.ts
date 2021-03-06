import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const PROJECTS_DIRECTORY = path.join(process.cwd(), "data/projects");
const ME_DIRECTORY = path.join(process.cwd(), "data/me");
const ABOUT_FILE = path.join(ME_DIRECTORY, "about.mdx");
const LINKS_FILE = path.join(ME_DIRECTORY, "links.mdx");

export interface ProjectMDXData {
  data: {
    title: string;
    tags: string[];
    date: string;
    image: string;
  };
  content: MDXRemoteSerializeResult;
}

export async function getAllProjects(): Promise<ProjectMDXData[]> {
  const fileNames = fs.readdirSync(PROJECTS_DIRECTORY);
  const allData = await Promise.all(
    fileNames.map(async (fileName) => {
      const fullPath = path.join(PROJECTS_DIRECTORY, fileName);
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(fileContent);
      return {
        data,
        content: await serialize(content),
      } as ProjectMDXData;
    })
  );

  return allData.sort(({ data: { date: a } }, { data: { date: b } }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

type Tag = {
  name: string;
  icon: string;
};
export interface AboutProps {
  info: MDXRemoteSerializeResult;
  technicalSkills: {
    languages: Tag[];
    frameworks: Tag[];
    tools: Tag[];
  };
  timeline: {
    start: string;
    end: string;
    institution: string;
    description: string;
  }[];
}

export async function getAboutMe(): Promise<AboutProps> {
  const fileContent = fs.readFileSync(ABOUT_FILE, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    info: await serialize(content),
    ...data,
  } as AboutProps;
}

export interface Links {
  email: string;
  github: string;
}
export async function getLinks(): Promise<Links> {
  const fileContent = fs.readFileSync(LINKS_FILE, "utf-8");
  const { data } = matter(fileContent);
  return data as Links;
}
