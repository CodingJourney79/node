// Copyright 2020 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Original: try_catch.js
function blah() {
  try {
    var a = 10;
    console.log(a);
  } catch (e) {}
  try {
    label: for (var i = 0; i < 100; i++) {
      try {
        var b = 0;
      } catch (e) {}
      try {
        while (b < 10) {
          try {
            console.log(b);
          } catch (e) {}
          try {
            b += 2;
          } catch (e) {}
          continue label;
        }
      } catch (e) {}
    }
  } catch (e) {}
  return 1;
}
try {
  blah();
} catch (e) {}
try {
  blah();
} catch (e) {}
try {
  (function () {
    try {
      1;
    } catch (e) {}
    try {
      1;
    } catch (e) {}
  })();
} catch (e) {}
try {
  if (true) {
    try {
      2;
    } catch (e) {}
    try {
      2;
    } catch (e) {}
  } else {
    try {
      3;
    } catch (e) {}
    try {
      3;
    } catch (e) {}
  }
} catch (e) {}
let a = 0;
try {
  switch (a) {
    case 1:
      try {
        1;
      } catch (e) {}
  }
} catch (e) {}
try {
  with (Math) {
    try {
      cos(PI);
    } catch (e) {}
  }
} catch (e) {}
let module = __wrapTC(() => new WebAssembly.Module(builder.toBuffer()));
const complex1 = __wrapTC(() => [1, 2, 3]);
const complex2 = __wrapTC(() => boom());
let complex3 = __wrapTC(() => function () {
  let complex4 = __wrapTC(() => [1, 2, 3]);
  return 2;
}());
try {
  if (true) {
    let complex5 = __wrapTC(() => new Map());
  }
} catch (e) {}
async function foo(a) {
  let val = await __wrapTC(() => a);
}
try {
  1;
} catch (e) {
  try {
    2;
  } catch (e) {}
}
try {
  call(() => {
    try {
      1;
    } catch (e) {}
    try {
      2;
    } catch (e) {}
  });
} catch (e) {}
function foo() {
  let a = 0;
  let b = 1;
  try {
    boom();
  } catch (e) {}
  return {
    a: a,
    b: b
  };
}
let {
  a: x,
  b: y
} = __wrapTC(() => foo());
