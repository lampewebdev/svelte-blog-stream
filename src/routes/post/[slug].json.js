export async function get(req, res) {
	const { slug } = req.params;
	const post = await req.db.get(`
		SELECT html, title, createdAt, description
		FROM blogPosts
		WHERE slug LIKE ?
		`, `%${slug}%`);

	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	res.end(JSON.stringify(post));
}