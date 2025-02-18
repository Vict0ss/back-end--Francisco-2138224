var arrayutils = {
    isEmpty: function(array) {
        return array.length === 0;
    },
    max: function(array) {
        if (this.isEmpty(array)) {
            return 0;
        } else {
            var m = array[0];
            for (let i = 1; i < array.length; i++) {
                if (array[i] > m) {
                    m = array[i];
                }
            }
            return m;
        }
    },
    min: function(array) {
        if (this.isEmpty(array)) {
            return 0;
        } else {
            var m = array[0];
            for (let i = 1; i < array.length; i++) {
                if (array[i] < m) {
                    m = array[i];
                }
            }
            return m;
        }
    }
};
module.exports = arrayutils;
