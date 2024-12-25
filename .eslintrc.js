module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // TypeScript 사용 시
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript 사용 시
    'plugin:prettier/recommended',
    'prettier', // eslint-config-prettier 추가
  ],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {
    // ESLint 룰 추가
    'react/react-in-jsx-scope': 'off', // React 17+에서는 필요 없음
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all' }],
  },
  settings: {
    react: {
      version: 'detect', // React 버전 자동 감지
    },
  },
};
