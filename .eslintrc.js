module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:vue/recommended"],
    // required to lint *.vue files
    plugins: [
        "vue"
    ],
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2017,
        /*
        "ecmaFeatures": {
            "classes": true,
            "experimentalObjectRestSpread": true,
            "jsx": true
        }, */
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 } ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "semi": [
            "warn",
            "never"
        ],
        "no-console": "warn",
        "no-unused-vars": "warn",
        'vue/valid-v-if': 'error'
    },
    "settings": {
      "html/html-extensions": [".html"],
}
};
