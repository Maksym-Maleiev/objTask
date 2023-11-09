// #1: points counter
var scores = {};
scores["Vadim"] = 0;
scores["Olexander"] = 0;
scores["Anastasia"] = 0;
scores;

scores["Vadim"] += 2;
scores;

scores["Olexander"] += 3;
scores["Anastasia"] += 4;
scores;

scores["Vadim"] -= 1;
scores;

// #2: we find out the essence of objects and arrays
var myCrazyObject = {
  "name": "A radiculous object",
  "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
  "random animal": "Banana Shark"
};
myCrazyObject["some array"][2]["number"];