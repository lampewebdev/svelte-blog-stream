import Database from "sqlite-async";

const openDbAndCreateTable = async () => {
	let db;
	try {
		db = await Database.open(":memory:");
	} catch (error) {
		throw Error("Can not open database");
	}
	try {
		await db.run(`
			CREATE TABLE blogPosts 
			(
				markdown TEXT,
				html TEXT,
				title TEXT,
				published BOOLEAN,
				createdAt TEXT,
				description TEXT,
				tags TEXT,
				series TEXT,
				slug TEXT
			)
    	`);		
	} catch (error) {
		throw Error("Can not create table");
	}
	return db;
};

const insertBlogPosts = async ({ db, blogPosts}) => {
	if(blogPosts.length <= 0){
		throw Error("Got empty blog posts");
	}
	const insertString = `
		INSERT INTO blogPosts 
		(markdown, html, title, published, createdAt, description, tags, series, slug)
		VALUES (?,?,?,?,?,?,?,?,?)
	`;
	try {
		const promisedInserts = [];
		blogPosts.forEach(async blogPost => {
			if(!!blogPost && !!blogPost.html && !!blogPost.markdown){
				const insert = db.run(insertString,
					blogPost.markdown,
					blogPost.html,
					blogPost.metadata.title || '',
					blogPost.metadata.published || '',
					blogPost.metadata.createdAt || '',
					blogPost.metadata.description || '',
					blogPost.metadata.tags || '',
					blogPost.metadata.series || '',
					blogPost.metadata.slug || ''
				);
				promisedInserts.push(insert);
			}
		});
		return Promise.all(promisedInserts);
	} catch (error) {
		throw Error(`can not insert blog posts! ${error.message}`);
	}
};

export { openDbAndCreateTable, insertBlogPosts };