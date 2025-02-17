import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
});

const blogPosts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog-posts" }),
});

export const collections = { projects, blogPosts };
