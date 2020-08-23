const filterDuplicates = (list) => {
    let counts = {};
    list.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    return counts
}



export const FilterDuplicates2 = (list) => {
    let filteredDuplicateList = filterDuplicates(list)
    let CAHCES = [];
    for (let item in filteredDuplicateList) {
      CAHCES.push([filteredDuplicateList[item],item])
    }
    return CAHCES;
  }

  