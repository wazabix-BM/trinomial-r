class solutions
{
	constructor (a, b, c, showDelta, showEquation)
	{
		this.a = a;
		this.b = b;
		this.c = c;
		this.showDelta = showDelta;
		this.showEquation = showEquation;
	}

	static OfThis ({a, b, c, showDelta, showEquation})
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
		let x1 = (0-b + Math.sqrt (delta)) / (2*a);
		let x2 = (0-b - Math.sqrt (delta)) / (2*a);

		if (showDelta === true)
		{
			let csl = console.log;

			csl (`delta = ${delta}`);
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
			return `\nError:\nSorry this library can only find solutions in the set of real numbers: delta is negative: ${delta}`;
		}

		if (delta === 0)
		{
			return `S = {${Math.round (x1)}}`;
		}

		if (delta > 0)
		{
			if (x1 < x2)
			{
				return `S = {${Math.round (x1)} ; ${Math.round (x2)}}`;
			}

			else
			{
				return `S = {${Math.round (x2)} ; ${Math.round (x1)}}`;
			}
		}
	}
}

module.exports = solutions;
