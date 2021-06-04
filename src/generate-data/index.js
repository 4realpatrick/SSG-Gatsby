const v1 = require("uuid").v1;
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const words = require("./word-source");
const fs = require("fs");
const path = require("path");

const lorem = new LoremIpsum({
  words,
});

function generateData(gruopMaxsize, dimensionSize) {
  const data = [];
  const selectedData = [];
  let totalDimension = 0;
  while (totalDimension < dimensionSize) {
    const dimensionForthisUnit = [];
    const selectedDimensionForThisUnit = [];
    const dimensionSizeForThisUnit = Math.ceil(Math.random() * gruopMaxsize);
    totalDimension += dimensionSizeForThisUnit;
    for (let i = 0; i <= dimensionSizeForThisUnit; i++) {
      const isDefault = Math.random() * 10 > 9.8;
      const dimension = {
        DimensionId: v1(),
        DimensionName: lorem
          .generateWords(Math.floor(Math.random() * 10) + 2)
          .replace(/\s/g, ""),
        DimensionShowOrder: i,
        isDefault,
      };
      dimensionForthisUnit.push(dimension);
      isDefault && selectedDimensionForThisUnit.push(dimension);
    }
    const unitData = {
      UnitId: v1(),
      UnitName: lorem
        .generateWords(Math.floor(Math.random() * 10) + 2)
        .replace(/\s/g, ""),
      UnitShowOrder: Math.random(),
    };
    data.push({
      ...unitData,
      DimensionList: dimensionForthisUnit,
    });
    selectedDimensionForThisUnit.length > 0 &&
      selectedData.push({ ...unitData, selectedDimensionForThisUnit });
  }
  return { selectedData, dataSource: data };
}

fs.writeFileSync(
  path.resolve(process.cwd(), "./src/data.json"),
  JSON.stringify(generateData(400, 30000))
);
