const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

// Absolute path to your local npm package (the one you want to test locally)
const packagePath = '../react-native-game-engine/index';

module.exports = mergeConfig({
    resolver: {
        // for local package
        nodeModulesPaths: [packagePath],
    },
    // for local package
    watchFolders: [packagePath],

    ...getDefaultConfig(__dirname),
}, config);
