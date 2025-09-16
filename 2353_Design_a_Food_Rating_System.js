class SortedSet {
    constructor() {
        this.arr = [];
    }

    static cmp(a, b) {
        if (a.neg !== b.neg) return a.neg - b.neg;
        return a.food.localeCompare(b.food);
    }

    lowerBound(target) {
        let l = 0, r = this.arr.length;
        while (l < r) {
            const mid = (l + r) >>> 1;
            if (SortedSet.cmp(this.arr[mid], target) < 0) l = mid + 1;
            else r = mid;
        }
        return l;
    }

    add(elem) {
        const idx = this.lowerBound(elem);
        if (idx < this.arr.length && SortedSet.cmp(this.arr[idx], elem) === 0) {
            return;
        }
        this.arr.splice(idx, 0, elem);
    }

    erase(elem) {
        const idx = this.lowerBound(elem);
        if (idx < this.arr.length && SortedSet.cmp(this.arr[idx], elem) === 0) {
            this.arr.splice(idx, 1);
        }
    }

    first() {
        return this.arr.length ? this.arr[0].food : "";
    }
}

/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function (foods, cuisines, ratings) {
    this.g = new Map();
    this.d = new Map();

    for (let i = 0; i < foods.length; ++i) {
        const food = foods[i];
        const cuisine = cuisines[i];
        const rating = ratings[i];

        this.g.set(food, { rating, cuisine });

        if (!this.d.has(cuisine)) this.d.set(cuisine, new SortedSet());
        this.d.get(cuisine).add({ neg: -rating, food });
    }
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
    const info = this.g.get(food);
    const oldRating = info.rating;
    const cuisine = info.cuisine;

    this.g.set(food, { rating: newRating, cuisine });

    const set = this.d.get(cuisine);
    set.erase({ neg: -oldRating, food });
    set.add({ neg: -newRating, food });
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
    const set = this.d.get(cuisine);
    return set.first();
};

/** 
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
