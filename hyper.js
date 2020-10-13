module.exports = {
  config: {
    fontSize: 18,
    windowSize: [1080, 720],
    fontFamily: '"Operator Mono", monospace',
    cursorShape: 'BLOCK',
    padding: '10px',
    shell: '/bin/zsh',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },
  plugins: ['hyperterm-base-16-ocean', 'hypercwd'],
};
