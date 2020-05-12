## trinomial-r

> This package is used to solve, factorize and find the canonical form of a trinome (polynomial equation)

## Contact me

If you have any questions do not hesitate to join me on my [`discord server`] (https://discord.gg/ES52WDg)

## Install and exemple

> npm i trinomial-r

* The library can give an example of the returns of the functions allowing to solve, factorize and find the canonical form of a trinome.

# CMD

> npm run exemple

## API

* <a href="#solve"><code>solutions<b>.OfThis</b></code></a>
* <a href="#factoring"><code>factoring<b>.this</b></code></a>
* <a href="#canonic"><code>canonicalForm<b>.OfThis</b></code></a>

## The different parameters of the functions *tags*

** <a href="#pSolutions"><code>solutions<b>.OfThis</b></code></a>
** <a href="#pFactoring"><code>factoring<b>.this</b></code></a>
** <a href="#pCanonic"><code>canonicalForm<b>.OfThis</b></code></a>

## Some explications about the library

The library has a resolution and factorization algorithm that works on minimum values ​​for "a" and "b". Remember: a trinomial looks like this: "ax² + bx + c". If the values ​​for "a", "b" and "c" are not given, the algorithm will solve this trinome by giving as default value for "a" and "b": "1" and "c": 0.

* For the polinomial roots the algorithm gives approximate default values
* __**Due to the approximation of the roots of the trinomial, the method for factoring may be obsolete**__

-------------------------------------------------------------------------------

<a name="solve"></a>
## Find the roots of a trinomial

```js
const
{
	solutions
} = require ('./trinomial-r');

const csl = console.log;

csl (solutions.OfThis ({
	a: -3,
	b: 5,
	c: 2
}));	/* S = {0 ; 2} */
```

-------------------------------------------------------------------------------

<a name="factoring"></a>
## Factoring the equation

```js
const
{
	factoring
} = require ('./trinomial-r');

const csl = console.log;

csl (factoring.this ({
	a: -3,
	b: 5,
	c: 2
}));	/* -3x(x - 2) */
```

-------------------------------------------------------------------------------

<a name="canonic"></a>
## Find the canonical form

```js
const
{
	canonicalForm
} = require ('./trinomial-r');

const csl = console.log;

csl (canonicalForm.OfThis ({
	a: -3,
	b: 5,
	c: 2
}));	/* -3(x - 1) + 4 */

/*
* You can choose to display alpha and beta using the optional parameters
* showAlpha: true *** default value => false
* showBeta: true *** default value => false
*/

csl (canonicalForm.OfThis ({
	a: -3,
	b: 5,
	c: 2,
	showAlpha: true,
	showBeta: true
}));

/* show ***
* alpha = 1
* beta = 4
* -3(x - 1) + 4
*/
```

-------------------------------------------------------------------------------

## Parameters

<a name="pSolutions"></a>
# solutions.OfThis

***showEquation: true => default value: false***
* Shows the equation

***showDelta: true => default value: false***
* Shows the discriminant of the equation

<a name="pFactoring"></a>
# factoring.this

***showEquation: true => default value: false***
* Shows the equation

***showDelta: true => default value: false***
* Shows the discriminant of the equation

***showRoots: true => default value: false***
* Shows roots of the equation

<a name="pCanonic"></a>
# canonicalForm.OfThis

***showEquation: true => default value: false***
* Shows the equation

***showDelta: true => default value: false***
* Shows the discriminant of the equation

***showAlpha: true => default value: false***
* Shows alpha

***showBeta: true => default value: false***
* Shows beta

## MIT License

***Copyright (c) 2019 wazabix***

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
"# trinomial-r" 
