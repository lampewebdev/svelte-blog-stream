export async function get(req, res) {
	const { slug } = req.params;
	const blogposts = await req.db.all(`
		SELECT  title, series, description, tags, slug
		FROM blogPosts
		WHERE tags LIKE ?
		`, `%${slug}%`);
	if (blogposts.length <= 0) {
		res.writeHead(500);
	} else {
		res.writeHead(200, {
			"Content-Type": "application/json"
		});
	}
	res.end(JSON.stringify(blogposts));
}