export default {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        // Ensure Jest runs transformed files as CommonJS
        modules: 'commonjs',
      },
    ],
  ],
};
