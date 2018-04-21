// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function factorial(x) {
  if (x < 0) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "simpleRecursion.re",
            19,
            2
          ]
        ];
  }
  return Pervasives.failwith("For you to implement");
}

exports.factorial = factorial;
/* No side effect */