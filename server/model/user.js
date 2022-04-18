console.log("[user] initialized");

// User Prototype
class User {
	constructor(first, last, email) {
		this.firstName = first;
		this.lastName = last;
		this.email = email;
	}
}

exports.createUser = function(firstName, lastName, email) {
	return new User (firstName, lastName, email);
}