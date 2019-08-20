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
		db = await openDbAndCreateTable();
		const blogPosts = await markdownLoader();
		await insertBlogPosts({ db, blogPosts });
	} catch (error) {
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