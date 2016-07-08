export function query(queryarray, datasource, unlessfound) {
  var result = queryarray.reduce(function(k,v) {
    if (k) {
      return k[v];
    } else {
      return null;
    }
  },datasource);
  return result ? result : unlessfound;
}

export function jpath(querystring, datasource, unlessfound) {
  return query(querystring.split(/\//).filter(function(item) { return item.length; }),datasource,unlessfound);
}
