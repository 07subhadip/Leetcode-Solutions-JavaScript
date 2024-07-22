/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let people = names.map((name, index) => ({ name, height: heights[index] }));
    people.sort((a, b) => b.height - a.height);
    return people.map(person => person.name);
  };