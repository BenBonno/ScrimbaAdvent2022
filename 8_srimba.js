function validTime(str) {
  //  write code here.
  const splitTime = str.split(":");
  const hours = parseInt(splitTime[0]);
  const minutes = parseInt(splitTime[1]);
  return hours < 24 && hours >= 0 && minutes >= 0 && minutes < 60;
}

// function validTime(str) {
//   [hr, min] = str.split(':').map(el => parseInt(el))
//   return (hr >=0 && hr <= 24) && (min >= 0 && min <= 60)
// }

/**
 * Test Suite
 */
describe("validTime()", () => {
  it("returns true for valid time", () => {
    // arrange
    const str = "13:58";

    // act
    const result = validTime(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(true);
  });

  it("returns false when invalid hours", () => {
    // arrange
    const str = "25:51";

    // act
    const result = validTime(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(false);
  });

  it("returns false when invalid minutes", () => {
    // arrange
    const str = "02:76";

    // act
    const result = validTime(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(false);
  });
});
