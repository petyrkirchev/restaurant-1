var currentOrder = (function () {
    var order = [];
    return {
        addToOrder: function (obj) {
            if (obj) { 
                order.push(obj) 
            } else {
                throw new Error("Wrong oject to add.");
            }
        },
        getAllOrders: function () {
            return order;
        }
    }
})();