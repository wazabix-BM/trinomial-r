class factoring
{
	constructor (a, b, c, showRoots, showDelta, showEquation)
	{
		this.a = a;
		this.b = b;
		this.c = c;
		this.showDelta = showDelta;
		this.showRoots = showRoots;
		this.showEquation = showEquation;
	}

	static this ({a, b, c, showDelta, showRoots, showEquation})
	{
		if (a === undefined)
		{
			a = 1;
		}

		if (b === undefined)
		{
			b = 1;
		}

		if (c === undefined)
		{
			c = 0;
		}

		let delta = (b**2) - (4*a*c);
		let x1 = Math.round ((0-b + Math.sqrt (delta)) / (2*a));
		let x2 = Math.round ((0-b - Math.sqrt (delta)) / (2*a));

		if (showDelta === true)
		{
			let csl = console.log;

			csl (`delta = ${delta}`);
		}

		if (showRoots === true)
		{
			let csl = console.log;

			csl (`r1 = ${x1} ; r2 = ${x2}`);
		}

		if (showEquation === true)
		{
			let csl = console.log;

			if (b < 0 && c < 0)
			{
				b *= -1;
				c *= -1;

				csl (`${a}x² - ${b}x - ${c}`);
			}

			if (b > 0 && c > 0)
			{
				csl (`${a}x² + ${b}x + ${c}`);
			}

			if (b < 0 && c > 0)
			{
				b *= -1;

				csl (`${a}x² - ${b}x + ${c}`);
			}

			if (b > 0 && c < 0)
			{
				c *= -1;

				csl (`${a}x² + ${b}x - ${c}`);
			}
		}

		if (delta < 0)
		{
			return `\nError:\nSorry this library can only factoring in the set of real numbers: delta is negative: ${delta}`;
		}

		if (delta === 0)
		{
			if (x1 < 0)
			{
				x1 *= -1;

				return `${a}(x + ${x1})²`;
			}

			if (x1 > 0)
			{
				return `${a}(x - ${x1})²`;
			}
		}
		if (delta > 0)
		{
			if (x1 < 0 && x2 < 0)
			{
				x1 *= -1;
				x2 *= -1;

				return `${a}(x + ${x1})(x + ${x2})`;
			}

			if (x1 > 0 && x2 > 0)
			{
				return `${a}(x - ${x1})(x - ${x2})`;
			}
			if (x1 > 0 && x2 < 0)
			{
				x2 *= -1;

				return `${a}(x - ${x1})(x + ${x2})`;
			}

			if (x1 < 0 && x2 > 0)
			{
				x1 *= -1;

				return `${a}(x + ${x1})(x - ${x2})`;
			}

			if (x1 === 0 && x2 < 0)
			{
				x2 *= -1;

				return `${a}x(x + ${x2})`;
			}

			if (x1 === 0 && x2 > 0)
			{
				return `${a}x(x - ${x2})`;
			}

			if (x1 < 0 && x2 === 0) {
				x1 *= -1;

				return (`${a}x(x + ${x1})`);
			}

			if (x1 > 0 && x2 === 0) {
				return (`${a}x(x - ${x1})`);
			}
		}
	}
}

module.exports = factoring;
