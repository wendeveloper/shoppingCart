//create the module called myApp
angular.module('myApp', [])
    //create controller called cartController
    .controller('CartController', function ($scope) {

        //define the scope of the controller

        //BOOK PROPERTIES ARRAY of default books
        var defaultBooks = [
            {title: 'Absolute Java',    qty: 1, price: 114.95},
            {title: 'Pro HTML5',        qty: 2, price: 27.95},
            {title: 'Head First HTML5', qty: 1, price: 27.89}
        ];
      
        //STORED DATA to check for books.  If there are books, parse through and overwrite the default list
        var storedData = window.localStorage.getItem("robins_cart");
        if (storedData != null) {
            defaultBooks = JSON.parse(storedData);
        }

        $scope.books = defaultBooks;

        //REMOVE BOOK
        $scope.removeBook = function(index) {
            $scope.books.splice(index, 1);
        }

        //ADD BOOK
        $scope.addBook = function() {
            //JSON object
            var newBook = {title   : 'New Book', qty     : 1, price   : 10.99};
            //pushing object onto $scope.books variable which adds the entry
            $scope.books.push(newBook);
        }

        //SAVE BOOKS TO LOCAL STORAGE
        $scope.saveBooks = function() {
            //save JSON to LOCAL STORAGE - per assignment lastName_cart for the key
            //strigify converts it to a string
            window.localStorage.setItem("robins_cart", JSON.stringify($scope.books));
        }
      
        //TOTAL
        $scope.updateTotal = function() {
            //loop through list of books and computes the total based on qty and price
            $scope.total = 0;
            for (var i = 0; i<$scope.books.length; i++) {
                $scope.total += $scope.books[i].qty * $scope.books[i].price;
            }
            return $scope.total;
        }
        

    }
);
 