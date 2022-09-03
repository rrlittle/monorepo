module.exports = function (api) {
  // caches babel config by
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets: ["babel-preset-expo"],
  };
};
