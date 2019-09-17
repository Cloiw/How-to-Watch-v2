module.exports = {
    "env": {
        "browser": true,
        "jest": true
      },
    "extends": "airbnb",
    "plugins": [
        "react"
      ],
      "parser": "babel-eslint",
      "rules":{
        "max-len": "off",
        "import/no-dynamic-require": "off",
        "global-require": "off",
        "react/destructuring-assignment": "off"
      }
    }
    