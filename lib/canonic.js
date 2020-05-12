class canonicalForm
{
	constructor (a, b, c, alpha, beta, showDelta, showAlpha, showBeta, showEquation)
	{
		this.a = a;
		this.b = b;
		this.c = c;
		this.alpha = alpha;
		this.beta = beta;
		this.showDelta = showDelta;
		this.showAlpha = showAlpha;
		this.showBeta = showBeta;
		this.showEquation = showEquation;
	}

	static OfThis ({a, b, c, showDelta, showAlpha, showBeta, showEquation})
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
		let alpha = Math.round (0-b / (2*a));
		let beta = Math.round (0-delta / (4*a));

		if (showDelta === true)
		{
			console.log (`delta = ${delta}`);
		}

		if (showAlpha === true)
		{
			console.log (`alpha = ${alpha}`);
		}

		if (showBeta === true)
		{
			console.log (`beta = ${beta}`);
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
			if (alpha < 0 && beta < 0)
			{
				alpha *= -1;
				beta *= -1;

				return `${a}(x + ${alpha}) - ${beta}`;
			}

			if (alpha > 0 && beta > 0)
			{
				return `${a}(x - ${alpha}) + ${beta}`;
			}

			if (alpha < 0 && beta > 0)
			{
				alpha *= -1;

				return `${a}(x + ${alpha}) + ${beta}`;
			}

			if (alpha > 0 && beta < 0)
			{
				beta *= -1;

				return `${a}(x - ${alpha}) - ${beta}`;
			}

			if (alpha === 0 && beta === 0)
			{
				return `${a}x`;
			}

			if (alpha < 0 && beta === 0)
			{
				alpha *= -1;

				return `${a}(x + ${alpha})`;
			}

			if (alpha > 0 && beta === 0)
			{
				return `${a}(x - ${alpha})`;
			}

			if (alpha === 0 && beta < 0)
			{
				beta *= -1;

				return `${a}x - ${beta}`;
			}

			if (alpha === 0 && beta > 0)
			{
				return `${a}x + ${beta}`;
			}
		}

		if (delta >= 0)
		{
			if (alpha < 0 && beta < 0)
			{
				alpha *= -1;
				beta *= -1;

				return `${a}(x + ${alpha}) - ${beta}`;
			}

			if (alpha > 0 && beta > 0)
			{
				return `${a}(x - ${alpha}) + ${beta}`;
			}

			if (alpha < 0 && beta > 0)
			{
				alpha *= -1;

				return `${a}(x + ${alpha}) + ${beta}`;
			}

			if (alpha > 0 && beta < 0)
			{
				beta *= -1;

				return `${a}(x - ${alpha}) - ${beta}`;
			}

			if (alpha === 0 && beta === 0)
			{
				return `${a}x`;
			}

			if (alpha < 0 && beta === 0)
			{
				alpha *= -1;

				return `${a}(x + ${alpha})`;
			}

			if (alpha > 0 && beta === 0)
			{
				return `${a}(x - ${alpha})`;
			}

			if (alpha === 0 && beta < 0)
			{
				beta *= -1;

				return `${a}x - ${beta}`;
			}

			if (alpha === 0 && beta > 0)
			{
				return `${a}x + ${beta}`;
			}
		}
	}
}

module.exports = canonicalForm;
