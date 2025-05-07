module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
  resolver: {
    assetExts: ['db', 'mp4', 'jpg', 'png', 'ttf', 'svg', 'otf'],
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'cjs'],
  },
};