const mongoose = require("mongoose");

const MONGODB_URL = "mongodb+srv://jeeteshbudhani5:mySecurePassword123@cluster0.8hmbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

exports.connect = () => {
	mongoose
		.connect(MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("DB Connection Success");
		})
		.catch((err) => {
			console.log("DB Connection Failed");
			console.log(err);
			process.exit(1);
		});
};
