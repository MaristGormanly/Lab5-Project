// create a user
console.log("[giff] initialized");

// User Prototype
class giff {
	constructor(username, email, password) {
		this.username = username;
		this.email = email;
        this.password = password;
	}
}

exports.creategiff = function(username, email, password) {
	return new giff(username, email, password);
}