function User(name, surname, email, password) {
    this.name = name;
    this.surname = name;
    this.email = email;
    this.password = password;
}

var userManager = (function () {
    var users = [new User("Peter", "Kirchev", "petrakis1987@abv.bg", "president")];

    return {
        addUser: function (user) {
            if (user instanceof User) {
                users.push(user);
            }
        },

        loginUser: function (email, password) {
            return users.some(function (u) {
                return (u.email === email) &&
                    (u.password === password);
            })
        },

        isUserExists: function (email) {
            return users.some(function (u) {
                return (u.email === email);
            })
        },
        isCorrectPassword: function (password) {
            return users.some(function (u) {
                return (u.password === password);
            })
        },

        getNumberOfUsers: function () {
            return users.length;
        },

        isPasswordValid: function (password) {
            return password.length > 5;
        }
    }
})();