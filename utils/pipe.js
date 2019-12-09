module.exports = (...fns) => args => fns.reduce((total, fn) => fn(total), args);
