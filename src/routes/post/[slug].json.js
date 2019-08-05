const showdown = require("showdown");
const showdownHighlight = require("showdown-highlight");
const converter = new showdown.Converter({
	extensions: [showdownHighlight],
	metadata: true,
	simpleLineBreaks: false,
	tables: true
});
const fs = require("fs");
const fsPromises = fs.promises;

// create a lookup table for the blog post accesed by slug!
const lookupTable = new Map();
(async () => {
	const dir = await fsPromises.readdir("src/blogposts");
	const loadFiles = dir.map(file => fsPromises.readFile(`src/blogposts/${file}`, "utf8"));
	const files = await Promise.all(loadFiles);
	files.map(file => {
		const html = converter.makeHtml(file);
		const metedata = converter.getMetadata();
		lookupTable.set(metedata.slug, JSON.stringify({ html, metedata }));
	});
})();

export function get(req, res) {
	const { slug } = req.params;
	const post = lookupTable.get(slug);
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	res.end(post);
}