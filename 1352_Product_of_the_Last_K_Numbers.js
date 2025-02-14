
var ProductOfNumbers = function () {
    this.prefixProducts = [1];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
    if (num === 0) {
        this.prefixProducts = [1];
    } else {
        this.prefixProducts.push(this.prefixProducts[this.prefixProducts.length - 1] * num);
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
    if (k >= this.prefixProducts.length) return 0;
    return this.prefixProducts[this.prefixProducts.length - 1] / this.prefixProducts[this.prefixProducts.length - k - 1];
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */