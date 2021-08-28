import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const projectsDirectory = path.join(process.cwd(), "data/projects");

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
  const fileNames = fs.readdirSync(projectsDirectory);
  const allData = await Promise.all(
    fileNames.map(async (fileName) => {
      const fullPath = path.join(projectsDirectory, fileName);
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
