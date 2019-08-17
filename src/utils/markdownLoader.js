const showdown = require("showdown");
const converter = new showdown.Converter({ metadata: true });
const fs = require("fs");
const fsPromises = fs.promises;

export default async () => {
	try {
		const dir = await fsPromises.readdir("src/blogposts");
		const readBlogPostsFiles = dir.map(file => fsPromises.readFile(`src/blogposts/${file}`, "utf8"));
		const BlogPostFiles = await Promise.all(readBlogPostsFiles);

		const blogposts = [];
		BlogPostFiles.reverse().forEach(file => {
			const blogpost = {};
			blogpost.markdown = file;
			blogpost.html = converter.makeHtml(file);
			blogpost.metadata = converter.getMetadata();
			blogposts.push(blogpost);
		});

		return blogposts;
	} catch (error) {
		console.log(error);
	}

};