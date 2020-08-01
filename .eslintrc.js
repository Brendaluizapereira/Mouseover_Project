module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb-base",
        "plugin:prettier/recommended"
    ],
    "plugins": [
			"prettier",
			"html"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
				"sourceType": "module",
    },
    "rules": {
			"prettier/prettier": "error",
			"allowForLoopAfterthoughts": true
    }
};
