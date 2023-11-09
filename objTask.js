// #1: points counter
var scores = {};
scores["Vadim Ishenko"] = 0;
scores["Olexander Chertkov"] = 0;
scores["Anastasia Daineko"] = 0;
scores;

scores["Vadim Ishenko"] += 2;
scores;

scores["Olexander Chertkov"] += 3;
scores["Anastasia Daineko"] += 4;
scores;

// #2: we find out the essence of objects and arrays
var myCrazyObject = {
  "name": "A radiculous object",
  "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
  "random animal": "Banana Shark"
};
myCrazyObject["some array"][2]["number"];