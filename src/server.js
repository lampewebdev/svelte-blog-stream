import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";
import markdownLoader from "./utils/markdownLoader.js";
import { openDbAndCreateTable, insertBlogPosts } from "./utils/databaseHelper.js";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";
(async () => {
	let db;
	try {
		console.log("Open and Create Table");
		db = await openDbAndCreateTable();
		console.log("Load markdown files");
		const blogPosts = await markdownLoader();
		console.log("Insert blog posts into db");
		await insertBlogPosts({ db, blogPosts });
	} catch (error) {
		console.log(error);
		console.log("closing db...");
		db.close();
	}
	const dbmiddleware = () => function (req, res, next) {
		req.db = db;
		next();
	};
	polka()
		.use(
			dbmiddleware(),
			compression({ threshold: 0 }),
			sirv("static", { dev }),
			sapper.middleware()
		)
		.listen(PORT, err => {
			if (err) console.log("error", err);
		});
})();