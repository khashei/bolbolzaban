const path = require('path');

module.exports = {
  parser: "babel-eslint",
  // plugins: ["import"],
  extends: [
    "airbnb",
    "prettier",
    "prettier/react"
    // "import/errors",
    // "import/warnings",
  ],
  // settings: {
  //   'import/resolver': {
  //     "webpack": {
  //       "config": "webpack.template.js",
  //     }
  //   }
  // },
  env: {
    browser: true
  },
  globals: {
    $: true,
    PRODUCTION: true,
    PATH: true,
    APPLICATION: true,
    USER: true,
    CLIENT_ID: true,
    CLIENT_SECRET: true,
    GRANT_TYPE: true
  },
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
        aspects: ["noHref", "invalidHref", "preferButton"]
      }
    ],
    "react/forbid-prop-types": [1, { forbid: ['any', 'array'] }],
    "linebreak-style": ["off", "windows"]
  },
  "plugins": [
    "prettier"
  ]
};
