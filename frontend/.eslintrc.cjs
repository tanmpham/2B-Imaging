module.exports ={
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic'
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  "root": true,
  "rules": {
    "@typescript-eslint/naming-convention": ["error",{
      "selector": "variable",
      "types": ["boolean"],
      "format": ["PascalCase"],
      "prefix": ["is", "should", "has", "can", "did", "will"]
    },
    {
      "selector": "variable",
      "modifiers": ["destructured"],
      "format": null
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },],
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/consistent-generic-constructors": "error",
    "@typescript-eslint/no-confusing-void-expression": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/consistent-type-exports": ["error",{fixMixedExportsWithInlineTypeSpecifier: true}],
    "@typescript-eslint/no-duplicate-type-constituents": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-useless-empty-export": "error"
  }
}
