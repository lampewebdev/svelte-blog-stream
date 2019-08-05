
const showdown = require("showdown");
const converter = new showdown.Converter({ metadata: true });
const fs = require("fs");
const fsPromises = fs.promises;

export async function get(req, res) {
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	const dir = await fsPromises.readdir("src/blogposts");
	const loadFiles = dir.map(file => fsPromises.readFile(`src/blogposts/${file}`, "utf8"));
	const files = await Promise.all(loadFiles);

	const metedata = files.reverse().map(file => {
		converter.makeHtml(file);
		return converter.getMetadata();
	});
	res.end(JSON.stringify(metedata));
}