function SuperArray() {

    SuperArray.prototype = Object.create(Array.prototype);

    this.filterWhere = function (filterObject) {
        return this.filter(
            function (item) {
                return checkObject(item, filterObject);
            });

        function checkObject(objectToCheck, filterObject) {
            return Object.keys(filterObject).reduce(function (previousValue, currentItem) {
                var filterObjectField = filterObject[currentItem];
                var objectToCheckField = objectToCheck[currentItem];


                if(filterObjectField.constructor.name === "RegExp"){
                    return previousValue && filterObjectField.test(objectToCheckField);
                }
                if(typeof filterObjectField === "object"){
                    return checkObject(objectToCheckField, filterObjectField);
                }
                else
                    return  previousValue && (filterObjectField === objectToCheckField);



                //return  (filterObjectField === objectToCheckField);

            }, true)
        }
    }

}


Array.prototype.filterWhere = function (filterObject) {
    return this.filter(
        function (item) {
            return checkObject(item, filterObject);
        });

    function checkObject(objectToCheck, filterObject) {
        return Object.keys(filterObject).reduce(function (previousValue, currentItem) {
            var filterObjectField = filterObject[currentItem];
            var objectToCheckField = objectToCheck[currentItem];


            if(filterObjectField.constructor.name === "RegExp"){
                return previousValue && filterObjectField.test(objectToCheckField);
            }
            if(typeof filterObjectField === "object"){
                return checkObject(objectToCheckField, filterObjectField);
            }
            else
                return  previousValue && (filterObjectField === objectToCheckField);



            //return  (filterObjectField === objectToCheckField);

        }, true)
    }
};








