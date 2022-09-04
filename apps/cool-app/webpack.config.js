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
    config.resolve.byDependency = {
      esm: {
        mainFields: ["browser", "module"],
      },
      commonjs: {
        aliasFields: ["browser"],
      },
      url: {
        preferRelative: true,
      },
    };
    config.resolveLoader = {
      modules: ["node_modules"],
      extensions: [".js", ".json"],
      mainFields: ["loader", "main"],
    };
  }

  if (config.mode === "production") {
    config.optimization.minimize = false;
  }

  // seems like the expo config does some bad shtuff...
  delete config.devServer; // expo dev server has so manu unexpected keys
  config.devServer = {
    compress: false,
    historyApiFallback: { disableDotRule: true, index: "/" },
    host: "0.0.0.0",
    hot: true,
    https: false,
  };
  delete config.node; // Configuration has an unknown property
  console.log(config);
  // Finally return the new config for the CLI to use.
  return config;
};
