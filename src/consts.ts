// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Aaron Amerling';
export const SITE_DESCRIPTION = 'Growth & Demand Generation Leader | Applied AI and GEO';

export interface Testimonial {
	quote: string;
	name: string;
	title: string;
}

export interface Brand {
	name: string;
	logo?: string;
}

export const BRANDS: Brand[] = [
	{ name: 'Disney', logo: 'disney.svg' },
	{ name: 'Meta', logo: 'meta.svg' },
	{ name: 'Best Buy Health', logo: 'best-buy.svg' },
	{ name: 'Dior', logo: 'dior.svg' },
	{ name: 'Square Enix', logo: 'square-enix.svg' },
	{ name: 'Ubisoft', logo: 'ubisoft.svg' },
	{ name: 'DirecTV', logo: 'directv.svg' },
	{ name: 'VMware', logo: 'vmware.svg' },
	{ name: 'Ripple Labs', logo: 'ripple.svg' },
	{ name: 'GAIN Credit' },
	{ name: 'GoFundMe', logo: 'gofundme.svg' },
	{ name: 'Colgate', logo: 'colgate.svg' },
	{ name: 'Yahoo', logo: 'yahoo.svg' },
	{ name: 'American Medical Response' },
];

export const TESTIMONIALS: Testimonial[] = [
	{
		quote:
			"Aaron is the strategist you want to have in the room. Over the years we've worked together on campaigns for clients from indie game devs to Fortune 100 companies to provide high impact growth strategies that are custom fit for each business challenge. Aaron strikes the right balance between proven methodologies and disruptive tactics that leverage current trends and emerging technologies. Aaron brings blue flame thinking and passion to every project.",
		name: 'Rowan Brooks',
		title: 'Agency collaborator',
	},
	{
		quote:
			'I really enjoyed working with Aaron at Etna. He was a strong leader who genuinely cared about his team, both professionally and personally. He made an effort to get to know the people he worked with and created an environment where people felt valued and supported. He also encouraged his leaders to think strategically, bring new ideas to the table, and take ownership of their areas of the business.',
		name: 'Marla H.',
		title: 'Etna Interactive',
	},
	{
		quote:
			'Aaron was involved with helping GoFundMe with innovative marketing strategy, including helping us define niches, start our first paid advertising campaigns, working with our advertising agency, and training our first in-house marketing team.',
		name: 'Andrew Ballester',
		title: 'Co-Founder, GoFundMe',
	},
	{
		quote:
			'Aaron is a great writer, marketing and branding advisor. He worked for me developing branding collateral, marketing strategy and a TV commercial for a company I was starting.',
		name: 'Ryan Windham',
		title: 'Founder & VC',
	},
];
