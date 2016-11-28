var app = {
  dataTypes: function(data) {
    if (data == null || typeof data === 'undefined') {
      return 'no value';
    }
    if (typeof data == 'string') {
      return data.length;
    } else if (typeof data == 'boolean') {
      return data;
    } else if (typeof data == 'number') {

      if (data < 100) {
        return "less than 100";
      } else if (data === 100) {
        return 'equal to 100';
      } else {
        return "more than 100";
      }
    }
    if (Array.isArray(data)) {
      if (data.length < 3) {
        return undefined;
      } else {
        return data[2];
      }
    }
    if (typeof data == 'function') {
      return data(true);
    }
  }
}
module.exports = app
