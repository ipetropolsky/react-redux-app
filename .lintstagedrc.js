module.exports = {
    '*.{js,ts,tsx}': 'yarn eslint --fix',
    '*.{ts,tsx,d.ts}': 'bash -c "yarn ts-check"',
    'package.json': "bash -c 'yarn install --immutable --immutable-cache'",
};
