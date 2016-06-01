var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function CalculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.CalculateLateFee = CalculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
})(Utility || (Utility = {}));
define("enums", ["require", "exports"], function (require, exports) {
    "use strict";
    var Category;
    (function (Category) {
        Category[Category["programming"] = 0] = "programming";
        Category[Category["fiction"] = 1] = "fiction";
        Category[Category["sport"] = 2] = "sport";
    })(Category || (Category = {}));
    exports.Category = Category;
});
define("interfaces", ["require", "exports"], function (require, exports) {
    "use strict";
});
/// <reference path="utility.ts" />
define("app", ["require", "exports", "enums"], function (require, exports, enums_1) {
    "use strict";
    var Library = (function () {
        function Library(books, librarian) {
            this.books = books;
            this.librarian = librarian;
        }
        Library.prototype.GetBooks = function () {
            return this.books;
        };
        Library.prototype.Search = function (func) {
            return this.books.filter(function (b) { return func(b); });
        };
        return Library;
    }());
    var books = new Array();
    var book1 = {
        id: 1,
        title: "TypeScript In-depth",
        available: true,
        category: enums_1.Category.programming,
        year: 2016,
        copies: 1,
        log: {
            rented: function () { return Math.random(); },
            damaged: function (message) { console.log(message); }
        }
    };
    books.push(book1);
    books.push({ id: 2, title: "Moby Dick", available: false, category: enums_1.Category.fiction, year: 1875, copies: 3 });
    var librarian = {
        name: "Zinaida",
        employeeId: "EA123",
        assistCustomer: function () { console.log(name + " is assisting customer"); }
    };
    var lib = new Library(books, librarian);
    var result = lib.Search(function (b) { return b.id === 1; });
    //console.log(result)
    var fee = Utility.Fees.CalculateLateFee(4);
});
//# sourceMappingURL=app.js.map