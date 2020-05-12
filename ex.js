const
{
	solutions,
	factoring,
	canonicalForm
} = require ('./index.js');

const csl = console.log;

csl ("\nFor example, for this equation: -3x² + 5x + 2 solutions are:", solutions.OfThis ({
	a: -3,
	b: 5,
	c: 2
}));

csl ("\nFor the factorized form it will be:", factoring.this ({
	a: -3,
	b: 5,
	c: 2
}));

csl ("\nAnd for the canonical form it will be:", canonicalForm.OfThis ({
	a: -3,
	b: 5,
	c: 2
}));
