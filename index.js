function findMatching(source, string) {
    return source.filter((driver) => driver.toLowerCase() === string.toLowerCase());
}
  
function fuzzyMatch(source, testString) {
    return source.filter((driver) => driver.toLowerCase().indexOf(testString.toLowerCase()) === 0);
}
  
function matchName(source, theName) {
    return source.filter((record) => record.name === theName);
}

