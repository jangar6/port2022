module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		camelcase: 0,
		'import/no-unresolved': 0, // aillas 적용을 하기 위해 off
		'no-extend-native': 0,
		'no-param-reassign': 0, // 함수 내에서 변수 재선언 허용
		'array-callback-return': 0,
		'consistent-return': 0,
		"import/prefer-default-export": 0,
	},
};
