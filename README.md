node-cfx
======

Programatically use cfx in ndoe

## methods

currently supported methods, all return child process

* docs
* init
* run
* test
* testall

## options

Below is a list of options and their CLI equivalent
* binary: '--binary',
* extras: '--extra-packages',
* config: '--use-config',
* profile: '--profiledir',
* pkgdir: '--pkgdir',
* static: '--static-args',
* app: '--app',
* filter: '--filter',
* repeat: '--times',
* updateUr': '--update-url',
* updateLink: '--update-link'

And there are special properties, `env` and `dir`, which the child process uses to execute

## examples

Examples are in the `examples/` dir, also check out the tests

## todo

Docs, better tests, currently requires FF installation to run, should use xvfb for headless tests
