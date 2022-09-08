const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: { dangerouslyAddModulePathsToTranspile: ["ui"] },
    },
    argv,
  );

  if (config.mode === "development") {
    config.devServer.compress = false;
    // config.plugins.push(new ReactRefreshWebpackPlugin());
    config.watch = true;
    config.resolve.symlinks = true;
  }

  if (config.mode === "production") {
    config.optimization.minimize = false;
  }

  // Finally return the new config for the CLI to use.
  return config;
};
