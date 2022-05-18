angular.module('myApp')
    //add filter called tokenize to myApp module
    //and then define a function that implements the filter
    .filter('tokenize', function ( ){

        //the value that was provided by the user and the delimiter
        return function (value, delimiter) {

            //test to make sure it's a string
            if (angular.isString(value)) {

                //if it is a string, use the split function to create array of all characters in the string
                var tokens = value.split("");
                if (delimiter) {

                    //if there is a delimiter, take array of characters and turn it back into a string
                    return tokens.join(delimiter);
                }
                else {
                    return tokens.join();
                }
            }
            else {
                return value;
            }
        };
    });