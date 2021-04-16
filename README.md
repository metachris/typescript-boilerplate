# TypeScript Boilerplate for 2021

[![Build and test status](https://github.com/metachris/typescript-boilerplate/workflows/Lint%20and%20test/badge.svg)](https://github.com/metachris/micropython-ctl/actions?query=workflow%3A%22Build+and+test%22)

Get started quickly and right-footed

TypeScript project boilerplate with modern tooling, targetting for Node.js and browser.

* [TypeScript](https://www.typescriptlang.org/) 4
* Optionally [esbuild](https://esbuild.github.io/) - to bundle for browsers and Node.js
* Linting with [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) ([tslint](https://palantir.github.io/tslint/) is deprecated)
* Testing with [Jest](https://jestjs.io/docs/getting-started) (and [ts-jest](https://www.npmjs.com/package/ts-jest))
* Publishing to npm
* Continuous integration ([GitHub Actions](https://docs.github.com/en/actions) / [GitLab CI](https://docs.gitlab.com/ee/ci/))
* Automatic API documentation with [TypeDoc](https://typedoc.org/guides/doccomments/)

See also the introduction blog post: [Starting a TypeScript Project in 2021](https://www.metachris.com/2021/03/bootstrapping-a-typescript-node.js-project/).


## Getting Started

* Clone the repository (you can also click "Use this template")
* Edit `package.json` and `tsconfig.json` to your liking
* Now you can run `yarn run`, `yarn lint`, `yarn test`, `yarn build` and `yarn ts-node <filename>`.
* Take a look at all the scripts in [`package.json`](https://github.com/metachris/typescript-boilerplate/blob/master/package.json)
* For publishing to npm, use `yarn publish` (or `npm publish`)

## esbuild

You can use [esbuild](https://esbuild.github.io/) to bundle for browsers (and Node.js if you want).
`esbuild` is an extremely fast bundler that supports a [large part of the TypeScript syntax](https://esbuild.github.io/content-types/#typescript).

```bash
# Install esbuild
yarn add -D esbuild

# Compile and bundle, with cli as entrypoint
./node_modules/.bin/esbuild src/cli.ts --bundle --platform=node --outfile=dist/esbuild/cli.js

# Build for browsers
./node_modules/.bin/esbuild src/browser.ts --bundle --outfile=dist/esbuild/browser.js
```

You can build everything with `yarn build`. Read more about the esbuild setup [here](https://www.metachris.com/2021/04/starting-a-typescript-project-in-2021/#esbuild).

This `package.json` includes `scripts` for various esbuild commands: [see here](https://github.com/metachris/typescript-boilerplate/blob/master/package.json#L23)

## Documentation, published to GitHub or GitLab pages

You can auto-generate API documentation from the TyoeScript source files using [typedoc](https://typedoc.org/guides/doccomments/). The generated documentation can be published to GitHub / GitLab pages through the CI:

* Install [typedoc](https://typedoc.org/guides/doccomments/): `yarn add -D typedoc`
* Add `docs` script to `package.json`: `"docs": "typedoc --entryPoints src/main.ts"`
* You can now generate the documentation with `yarn docs`. The resulting HTML is saved in `docs/`.
* Publish to pages through CI:
  * [GitHub pages](https://pages.github.com/): uncomment content of `.github/workflows/deploy-gh-pages.yml` and enable pages in GitHub repo settings
  * [GitLab pages](https://docs.gitlab.com/ee/user/project/pages/): uncomment deploy task in `.gitlab-ci.yml`

For example the documentation for this project: https://metachris.github.io/typescript-boilerplate/

## References

* **[Blog post: Starting a TypeScript Project in 2021](https://www.metachris.com/2021/03/bootstrapping-a-typescript-node.js-project/)**
* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
* [tsconfig docs](https://www.typescriptlang.org/tsconfig)
* [esbuild docs](https://esbuild.github.io/)
* [typescript-eslint docs](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md)
* [Jest docs](https://jestjs.io/docs/getting-started)
* [GitHub Actions](https://docs.github.com/en/actions), [GitLab CI](https://docs.gitlab.com/ee/ci/)


## Feedback

Reach out with feedback and ideas:

* [twitter.com/metachris](https://twitter.com/metachris)
* [Create a new issue](https://github.com/metachris/typescript-boilerplate/issues)
