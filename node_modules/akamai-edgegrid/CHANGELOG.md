# RELEASE NOTES

## 3.2.0 (Apr 26, 2022)

#### IMPROVEMENTS:
* Add Typescript declaration file ([#71](https://github.com/akamai/AkamaiOPEN-edgegrid-node/issues/71))

## 3.1.4 (Mar 24, 2022)

#### IMPROVEMENTS:
* Remove deprecated `moment` dependency

#### BUG FIXES
* Fix response when Content-Type is `application/gzip` ([#83](https://github.com/akamai/AkamaiOPEN-edgegrid-node/issues/83))

## 3.1.3 (Feb 22, 2022)

#### IMPROVEMENTS:
* Update various dependencies

#### BUG FIXES
* Bump axios to 0.26.0 to get rid of vulnerability in [follow-redirects](https://security.snyk.io/vuln/SNYK-JS-FOLLOWREDIRECTS-2396346)

## 3.1.2 (Nov 3, 2021)

#### NOTES:
* [IMPORTANT] Change npm package name from `edgegrid` to `akamai-edgegrid`
* Clean up README.md to include working examples and get rid of inconsistencies

## 3.1.1 (Sep 28, 2021)

#### BUG FIXES:
* Update version of axios to 0.21.4 to get rid of ReDoS vulnerability

## 3.1.0 (Sep 27, 2021)

#### BUG FIXES:
* Fix support of environment variables ([#27](https://github.com/akamai/AkamaiOPEN-edgegrid-node/issues/27))
* Fix error when Tarball exceeds maxbody size ([#33](https://github.com/akamai/cli-edgeworkers/issues/33))

#### FEATURES/ENHANCEMENTS
* Replace 'request' package with axios ([#64](https://github.com/akamai/AkamaiOPEN-edgegrid-node/issues/64))
* Fix code quality issues
* Update version of mocha
* Add resolving ~ sign in edgerc path