function User(name, surname, email, password) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
}

var userManager = (function () {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    return {
        addUser: function (user) {
            if (user instanceof User) {
                users.unshift(user);
            }
            localStorage.setItem('users', JSON.stringify(users));
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
        isPasswordValid: function (password) {
            return password.length > 3;
        }
    }
})();