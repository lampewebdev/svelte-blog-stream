
export async function get(req, res) {
	let blogposts;
	try {
		blogposts = await req.db.all("SELECT title, series, description, tags from blogPosts");
	} catch (error) {
		throw Error("could not load blogposts for the main page");
	}
	if (blogposts.length <= 0){
		res.writeHead(500);
	} else {
		res.writeHead(200, {
			"Content-Type": "application/json"
		});
	}
	res.end(JSON.stringify(blogposts));
}