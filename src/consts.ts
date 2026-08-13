// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Aaron Amerling';
export const SITE_DESCRIPTION = 'Growth & Demand Generation Leader | Applied AI and GEO';

export interface Testimonial {
	quote: string;
	name: string;
	title: string;
}

export const BRANDS: string[] = [
	'Disney',
	'Meta',
	'Best Buy Health',
	'Dior',
	'Square Enix',
	'Ubisoft',
	'DirecTV',
	'VMware',
	'Ripple Labs',
	'GAIN Credit',
	'GoFundMe',
	'Colgate',
	'Yahoo',
	'American Medical Response',
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
