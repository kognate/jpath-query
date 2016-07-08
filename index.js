var Query = {};
Query.query = function(queryarray, datasource, unlessfound) {
  var result = queryarray.reduce(function(k,v) {
    if (k) {
      return k[v];
    } else {
      return null;
    }
  },datasource);
  return result ? result : unlessfound;
}

Query.jpath = function(querystring, datasource, unlessfound) {
  return this.query(querystring.split(/\//).filter(function(item) { return item.length; }),datasource,unlessfound);
}

module.exports = Query;
