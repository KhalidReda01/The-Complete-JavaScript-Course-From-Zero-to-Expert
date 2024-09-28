# strict mode 

we use it to avoid some kind of erros I as see here

for example

```js
"use strict";

let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can drive");
// const private = "audio";

```



- if you have typo error like this example if you missed the s letter at the variable hasDriverlicense you intentionly mistyped it to see the error
- secod if you used perserved names like private or if  interface 

