export default (dict, callback) => Object.keys(dict).map((key, i) => callback(key, dict[key], i))