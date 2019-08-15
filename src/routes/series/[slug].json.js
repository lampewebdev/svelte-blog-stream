const showdown = require("showdown");
const converter = new showdown.Converter({ metadata: true });
const fs = require("fs");
const fsPromises = fs.promises;

export async function get(req, res) {
	const { slug } = req.params;
	const dir = await fsPromises.readdir("src/blogposts");
	const loadFiles = dir.map(file => fsPromises.readFile(`src/blogposts/${file}`, "utf8"));
	const files = await Promise.all(loadFiles);

	const metadata = [];
	files.reverse().forEach(file => {
		converter.makeHtml(file);
		const generatedmetadata = converter.getMetadata();
		if (generatedmetadata.published === "true" && generatedmetadata.series.includes(slug)) {
			return metadata.push(converter.getMetadata());
		}
		return;
	});

	if (metadata.length <= 0) {
		res.writeHead(500);
	} else {
		res.writeHead(200, {
			"Content-Type": "application/json"
		});
	}
	res.end(JSON.stringify(metadata));
}