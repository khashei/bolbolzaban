const path = require('path');

module.exports = {
  parser: "babel-eslint",
  // plugins: ["import"],
  extends: [
    "airbnb",
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
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
        aspects: ["noHref", "invalidHref", "preferButton"]
      }
    ],
    "react/forbid-prop-types": [true, { forbid: ['any', 'array'] }],
    "linebreak-style": ["off", "windows"]
  }
};
