module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:prettier/recommended' // 添加 prettier 插件
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    // 'plugin:import/typescript'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 0,
    'import/extensions': 'off' // 解决 Using eslint with typescript - Unable to resolve path to module
  },
  settings: {
    'import/resolver': {
      // paths: ['src'],
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}
