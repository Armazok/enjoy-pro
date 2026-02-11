module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	env: {
		browser: true,
		node: true,
		es2021: true,
		jest: true,
	},

	plugins: [
		'react',
		'react-hooks',
		'@typescript-eslint',
		'boundaries',
		'import',
		'unicorn',
		'prettier',
	],

	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:boundaries/recommended',
		'plugin:prettier/recommended',
	],

	settings: {
		'boundaries/elements': [
			{ type: 'app', pattern: 'src/app/**/*.{ts,tsx}' },
			{ type: 'pages', pattern: 'src/pages/**/*.{ts,tsx}' },
			{ type: 'features', pattern: 'src/features/**/*.{ts,tsx}' },
			{ type: 'widgets', pattern: 'src/widgets/**/*.{ts,tsx}' },
			{ type: 'entities', pattern: 'src/entities/**/*.{ts,tsx}' },
			{ type: 'shared', pattern: 'src/shared/**/*.{ts,tsx}' },
		],

		'boundaries/dependency-rules': [
			{ from: 'app', allow: ['shared', 'entities', 'features', 'widgets', 'pages'] },
			{ from: 'pages', allow: ['shared', 'widgets', 'features', 'entities'] },
			{ from: 'pages', disallow: ['app'] },
			{ from: 'features', allow: ['shared', 'widgets', 'entities', 'features'] },
			{ from: 'features', disallow: ['app', 'pages'] },
			{ from: 'widgets', allow: ['shared', 'features', 'entities'] },
			{ from: 'widgets', disallow: ['app', 'pages'] },
			{ from: 'entities', allow: ['shared', 'entities'] },
			{ from: 'entities', disallow: ['app', 'pages', 'features', 'widgets'] },
			{ from: 'shared', allow: ['shared'] },
			{ from: 'shared', disallow: ['app', 'pages', 'features', 'widgets', 'entities'] },
		],

		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: './tsconfig.json',
			},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
				paths: ['src'],
			},
		},

		react: {
			version: 'detect',
		},

		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
	},

	rules: {
		// ============ БАЗОВЫЕ ПРАВИЛА ============
		'no-empty-pattern': 'off',
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-debugger': 'warn',

		// ============ TYPESCRIPT ============
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
			},
		],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/ban-ts-comment': 'warn',
		'@typescript-eslint/no-non-null-assertion': 'warn',
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				disallowTypeAnnotations: true,
			},
		],

		// ============ REACT ============
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'react/display-name': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',

		// ============ ИМПОРТЫ - ОСНОВНЫЕ ПРАВИЛА ============

		// ЗАПРЕЩАЕМ относительные импорты между разными слоями
		'no-restricted-imports': [
			'error',
			{
				patterns: [
					// Относительные импорты между слоями
					{
						group: ['../../*', '../../../*', '../../../../*', '../../../../../*'],
						message:
							'Для импортов между разными модулями используйте алиасы (@app, @pages, @features, @widgets, @entities, @shared)',
					},
					// Запрет на прямые импорты из внутренних файлов pages
					{
						group: [
							'@pages/*/*',
							'@pages/**/ui/*',
							'@pages/**/lib/*',
							'@pages/**/model/*',
							'@pages/**/api/*',
						],
						message:
							'Импортируйте только из public API страницы (index.ts). Используйте: import { Component } from "@pages/name"',
					},
					// Запрет на прямые импорты из внутренних файлов features
					{
						group: [
							'@features/*/*',
							'@features/**/ui/*',
							'@features/**/lib/*',
							'@features/**/model/*',
							'@features/**/api/*',
						],
						message:
							'Импортируйте только из public API фичи (index.ts). Используйте: import { feature } from "@features/name"',
					},
					// Запрет на прямые импорты из внутренних файлов widgets
					{
						group: [
							'@widgets/*/*',
							'@widgets/**/ui/*',
							'@widgets/**/lib/*',
							'@widgets/**/model/*',
						],
						message:
							'Импортируйте только из public API виджета (index.ts). Используйте: import { Widget } from "@widgets/name"',
					},
					// Запрет на прямые импорты из внутренних файлов entities
					{
						group: [
							'@entities/*/*',
							'@entities/**/ui/*',
							'@entities/**/lib/*',
							'@entities/**/model/*',
							'@entities/**/api/*',
						],
						message:
							'Импортируйте только из public API сущности (index.ts). Используйте: import { entity } from "@entities/name"',
					},
					// Запрет на прямые импорты из app (кроме index.ts)
					{
						group: [
							'@app/*/*',
							'@app/**/ui/*',
							'@app/**/lib/*',
							'@app/**/model/*',
							'@app/**/api/*',
						],
						message:
							'Импортируйте только из public API app (index.ts). Используйте: import { provider } from "@app/name"',
					},
				],
			},
		],

		'import/no-relative-parent-imports': 'off',

		// ОТКЛЮЧАЕМ import/no-internal-modules - используем no-restricted-imports
		'import/no-internal-modules': 'off',

		// ПРАВИЛО: порядок импортов
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'type'],
				pathGroups: [
					{ pattern: 'react', group: 'builtin', position: 'before' },
					{ pattern: '@app/**', group: 'internal', position: 'after' },
					{ pattern: '@pages/**', group: 'internal', position: 'after' },
					{ pattern: '@features/**', group: 'internal', position: 'after' },
					{ pattern: '@widgets/**', group: 'internal', position: 'after' },
					{ pattern: '@entities/**', group: 'internal', position: 'after' },
					{ pattern: '@shared/**', group: 'internal', position: 'after' },
					{ pattern: './*.scss', group: 'index', position: 'after' },
					{ pattern: './*.css', group: 'index', position: 'after' },
				],
				pathGroupsExcludedImportTypes: ['builtin', 'object'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],

		// ============ ПРАВИЛА ДЛЯ PUBLIC API ============

		// ПРАВИЛО: экспорты только из index.ts (public API)
		'boundaries/entry-point': [
			'error',
			{
				default: 'disallow',
				rules: [
					{
						target: ['pages', 'features', 'widgets', 'entities'],
						allow: ['**/index.ts', '**/index.tsx'],
						disallow: ['**/*.ts', '**/*.tsx'],
					},
					{
						target: ['shared'],
						allow: ['**/index.ts', '**/index.tsx', '**/*.ts', '**/*.tsx'],
					},
					{
						target: ['app'],
						allow: ['*'],
					},
				],
			},
		],

		// ПРАВИЛО: проверка зависимостей между слоями
		'boundaries/element-types': [
			'error',
			{
				default: 'disallow',
				rules: [
					{ from: 'app', allow: ['shared', 'entities', 'features', 'widgets', 'pages'] },
					{ from: 'pages', allow: ['shared', 'widgets', 'features', 'entities'] },
					{ from: 'pages', disallow: ['app'] },
					{ from: 'features', allow: ['shared', 'widgets', 'entities', 'features'] },
					{ from: 'features', disallow: ['app', 'pages'] },
					{ from: 'widgets', allow: ['shared', 'features', 'entities'] },
					{ from: 'widgets', disallow: ['app', 'pages'] },
					{ from: 'entities', allow: ['shared', 'entities'] },
					{ from: 'entities', disallow: ['app', 'pages', 'features', 'widgets'] },
					{ from: 'shared', allow: ['shared'] },
					{
						from: 'shared',
						disallow: ['app', 'pages', 'features', 'widgets', 'entities'],
					},
				],
			},
		],

		// ПРАВИЛО: запрет циклических зависимостей
		'import/no-cycle': ['error', { maxDepth: Infinity, ignoreExternal: true }],

		// ПРАВИЛО: запрет дублирования импортов
		'import/no-duplicates': 'error',

		// ПРАВИЛО: все импорты должны быть в начале файла
		'import/first': 'error',

		// ПРАВИЛО: импорты не должны быть лишними
		'import/no-unused-modules': [
			'warn',
			{
				unusedExports: true,
				missingExports: false,
				ignoreExports: [
					'src/app/**',
					'src/pages/**',
					'src/**/index.ts',
					'src/**/index.tsx',
				],
			},
		],

		// ПРАВИЛО: запрет относительных путей с выходом за пределы
		'import/no-relative-packages': 'error',

		// ============ UNICORN ============
		'unicorn/filename-case': [
			'error',
			{
				cases: {
					kebabCase: true,
					pascalCase: true,
				},
				ignore: ['^use[A-Z]', '^\\.', '^_', '^[A-Z]'],
			},
		],
		'unicorn/prefer-export-from': 'error',
		'unicorn/no-empty-file': 'error',
		'unicorn/prefer-node-protocol': 'error',
	},

	// ============ OVERRIDES - СПЕЦИАЛЬНЫЕ ПРАВИЛА ДЛЯ INDEX ФАЙЛОВ ============
	overrides: [
		{
			// ДЛЯ ВСЕХ INDEX.TS ФАЙЛОВ В FSD
			files: ['src/**/index.ts', 'src/**/index.tsx', 'src/**/index.js', 'src/**/index.jsx'],
			rules: {
				'no-restricted-imports': [
					'error',
					{
						patterns: [
							{
								group: [
									'@app/*',
									'@pages/*',
									'@features/*',
									'@widgets/*',
									'@entities/*',
									'@shared/*',
								],
								message:
									'В index.ts используйте относительные импорты (./ui/Component), а не алиасы',
							},
						],
					},
				],
				'import/no-internal-modules': 'off',
				'import/no-relative-parent-imports': 'off',
				'import/no-relative-packages': 'off',
				'import/no-unused-modules': 'off',
			},
		},
	],

	ignorePatterns: [
		'dist',
		'build',
		'node_modules',
		'coverage',
		'*.config.js',
		'*.config.ts',
		'.eslintrc.js',
	],
};
