module.exports = {
    "globals": {
        "vue-jest": {
            "hideStyleWarn": true
        }
    },
    "verbose": true,
    "moduleFileExtensions": [
        "js",
        "json",
        "vue",
        "md"
    ],
    "collectCoverageFrom": [
        "components/**/*.{js,vue}",
        "services/**/*{js}"
    ],
    "moduleNameMapper": {
        "^@/(.*)$": "<rootDir>/$1"
    },
    "transform": {
        "^.+\\.js$": "babel-jest",
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.md?$": "markdown-loader-jest"
    }
}