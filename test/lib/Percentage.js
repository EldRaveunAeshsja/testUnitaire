module.exports = {

    evolution: function(a, b) {
        if (a == 0) {
            return Infinity;
        }
        return this.round(10000 * ((b - a) / a)) / 100;
    },

    round: function(value) {
        return Math.round((100 * value)/100)
    }
}