module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run preview',
      url: ['http://localhost:4173'],
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
  },
};
