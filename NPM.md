## Listing
npm list	Lists the installed versions of all dependencies in this software
npm list -g --depth 0	Lists the installed versions of all globally installed packages
npm view	Lists the latest versions of all dependencies in this software
npm outdated	Lists only the dependencies in this software which are outdated

## Updating
npm update	Update production packages
npm update --dev	Update dev packages
npm update -g	Update global packages
npm update lodash	Update a package

## Installing
npm i sax	NPM package
npm i sax@latest	Specify tag latest
npm i sax@3.0.0	Specify version 3.0.0
npm i sax@">=1 <2.0"	Specify version range
npm i @org/sax	Scoped NPM package
npm i user/repo	GitHub
npm i user/repo#master	GitHub
npm i github:user/repo	GitHub
npm i gitlab:user/repo	GitLab
npm i /path/to/repo	Absolute path
npm i ./archive.tgz	Tarball
npm i https://site.com/archive.tgz	Tarball via HTTP