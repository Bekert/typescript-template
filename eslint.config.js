import babelParser from '@babel/eslint-parser'
import js from '@eslint/js'
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

export default [
	js.configs.recommended,
	{
		languageOptions: {
			parser: babelParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			},
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		plugins: {
			'@stylistic': stylistic
		},
		rules: {
			'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'@stylistic/semi': ['error', 'never'],
			'@stylistic/max-len': ['warn', { code: 100 }],
			'@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
			'@stylistic/jsx-quotes': ['error', 'prefer-single'],
			'@stylistic/quote-props': ['error', 'as-needed'],
			'@stylistic/comma-dangle': ['error', 'never'],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/array-bracket-spacing': ['error', 'never'],
			'@stylistic/arrow-parens': ['error', 'as-needed']
		},
		ignores: ['dist/', 'build/', '/built']
	}
]
