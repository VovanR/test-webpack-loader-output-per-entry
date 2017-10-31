# test-webpack-loader-output-per-entry

See:
- https://webpack.js.org/configuration/
- https://github.com/webpack-contrib/file-loader
- https://github.com/webpack/webpack/issues/2090



```
src/
├── a/
│   └── index.js
├── h/
│   └── index.js
└── vendor/
    └── fonts.txt
```

```
dist/
├── about/
│   ├── index.js
│   └── fonts.txt
└── home/
    ├── index.js
    └── fonts.txt
```
