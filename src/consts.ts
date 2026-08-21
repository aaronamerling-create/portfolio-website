export const SITE_TITLE = 'Aaron Amerling';
export const SITE_DESCRIPTION =
	'Marketing and product leader. 60-person organizations, £40M budgets, five U.S. patents, and AEO and GEO running as live growth channels.';

export const PERSON_SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Aaron Amerling',
	jobTitle: 'Chief Marketing Officer',
	description:
		'Marketing and product leader specializing in growth, applied AI, answer engine optimization and marketing organization design. Co-inventor on five U.S. patents.',
	url: 'https://aaronamerling.com',
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'San Diego',
		addressRegion: 'CA',
		addressCountry: 'US',
	},
	sameAs: [
		'https://www.linkedin.com/in/aaronamerling/',
		'https://patents.justia.com/inventor/aaron-amerling',
	],
	alumniOf: [
		{ '@type': 'CollegeOrUniversity', name: 'University of California, Santa Cruz' },
		{ '@type': 'CollegeOrUniversity', name: 'San Diego State University' },
	],
	knowsAbout: [
		'Marketing strategy',
		'Answer engine optimization',
		'Generative engine optimization',
		'Applied artificial intelligence in marketing',
		'Go-to-market strategy',
		'Demand generation',
		'Product marketing',
		'Marketing organization design',
		'Brand positioning',
	],
	award: [
		'Co-inventor, five U.S. patents, trust-network architecture',
		'Runner-up, CONNECT Most Innovative Product of the Year, Mobile Apps',
		'International Communicator Award',
		'Three International Telly Awards, Digital Advertising',
		'Nickelodeon Fellowship',
		'20th Century Fox New Writers Award',
	],
};

export interface Testimonial {
	quote: string;
	name: string;
	title: string;
	current?: string;
	full?: string;
	linkedin?: boolean;
}

export interface LogoItem {
	name: string;
	caption: string;
	logo?: string;
	/** Icon-only marks (no wordmark text) read smaller than text logos at equal height; bump their render size to compensate. */
	large?: boolean;
}

export interface LogoRow {
	label: string;
	items: LogoItem[];
}

export const LOGO_ROWS: LogoRow[] = [
	{
		label: 'In house',
		items: [
			{ name: 'Etna Interactive', caption: 'Chief Marketing Officer', logo: 'etna-interactive.png' },
			{
				name: 'Best Buy Health (GreatCall)',
				caption: 'Sr. Manager, Digital and Mobile Product and Marketing',
				logo: 'best-buy.svg',
			},
			{
				name: 'GAIN Credit',
				caption: 'Sr. Manager, Digital Product and Marketing',
				logo: 'gain-credit.png',
			},
			{
				name: 'Voxox / Telcentris',
				caption: 'Director of Marketing and Product Innovation',
				logo: 'voxox.png',
			},
			{
				name: 'Robbins Research International (Tony Robbins)',
				caption: 'Writer and Marketing Communications Lead',
				logo: 'tony-robbins.png',
			},
			{ name: 'Ziff Davis', caption: 'Marketing Communications Lead', logo: 'ziff-davis.webp' },
			{
				name: 'Avatar: The Last Airbender (Nickelodeon)',
				caption: 'TV Writer, Nickelodeon Fellowship',
				logo: 'avatar.png',
			},
		],
	},
	{
		label: 'Agency and strategy',
		items: [
			{ name: 'Disney Games', caption: 'Campaign strategy, via The Lemonade Agency', logo: 'disney.svg' },
			{ name: 'Meta', caption: 'Marketing strategy, via The Lemonade Agency', logo: 'meta.svg' },
			{
				name: 'Ubisoft',
				caption: 'Launch go-to-market, via The Lemonade Agency',
				logo: 'ubisoft.svg',
				large: true,
			},
			{
				name: 'Square Enix',
				caption: 'Marketing strategy, via The Lemonade Agency',
				logo: 'square-enix.svg',
			},
			{
				name: 'Dior',
				caption: 'NFT and crypto brand strategy, via The Lemonade Agency',
				logo: 'dior.svg',
			},
			{
				name: 'DirecTV',
				caption: 'Marketing strategy, via The Lemonade Agency',
				logo: 'directv.svg',
			},
			{
				name: 'The San Francisco Marathon',
				caption: 'Brand turnaround strategy, via The Lemonade Agency',
			},
			{ name: 'VMware', caption: 'Agency team lead, via Team Lewis', logo: 'vmware.svg' },
			{ name: 'Ripple Labs', caption: 'Agency team lead, via Team Lewis', logo: 'ripple.svg' },
			{ name: 'Yahoo', caption: 'Branding for Yahoo Current TV, via Scenefour', logo: 'yahoo.svg' },
			{
				name: 'Colgate',
				caption: 'Paid social for a D2C oral care brand, via Amasa Agency',
				logo: 'colgate.svg',
			},
			{
				name: 'Pardee Homes',
				caption: 'Print and digital advertising, via Zukor Design',
				logo: 'pardee-homes.png',
			},
		],
	},
	{
		label: 'Advisory',
		items: [
			{ name: 'GoFundMe', caption: 'Early marketing advisor', logo: 'gofundme.svg' },
			{ name: 'Steno.ai', caption: 'Strategic advisor, Techstars mentor', logo: 'steno-ai.png', large: true },
			{ name: 'TrendSource', caption: 'Strategic marketing advisor', logo: 'trendsource.png' },
			{
				name: 'American Medical Response (AMR)',
				caption: 'Crisis and search strategy advisor',
				logo: 'amr.png',
			},
			{
				name: 'Cloudhands (cloudhands.ai)',
				caption: 'Product & AI Consultant',
				logo: 'cloudhands.png',
				large: true,
			},
		],
	},
];

export const FEATURED_QUOTE: Testimonial = {
	quote: "I've yet to find an industry or a challenge he hasn't dealt with.",
	name: 'Trevor Dudeck',
	title: 'CEO, The Lemonade Agency',
};

export const TESTIMONIALS: Testimonial[] = [
	{
		quote:
			"Aaron is the strategist you want to have in the room. Over the years we've worked together on campaigns for clients from indie game devs to Fortune 100 companies to provide high impact growth strategies that are custom fit for each business challenge. Aaron strikes the right balance between proven methodologies and disruptive tactics that leverage current trends and emerging technologies. Aaron brings blue flame thinking and passion to every project.",
		name: 'Rowan Brooks',
		title: 'Chief Creative Officer, The Lemonade Agency',
	},
	{
		quote:
			'I really enjoyed working with Aaron at Etna. He was a strong leader who genuinely cared about his team, both professionally and personally. He made an effort to get to know the people he worked with and created an environment where people felt valued and supported. He also encouraged his leaders to think strategically, bring new ideas to the table, and take ownership of their areas of the business.',
		name: 'Marla Husovsky',
		title: 'Director of Digital Advertising, Etna Interactive (reported to Aaron)',
	},
	{
		quote:
			'What always stood out to me about Aaron was his ability to see the bigger picture. He is a creative, strategic thinker who could step back from the immediate challenge, identify the larger opportunity, and push our thinking in new directions. As my supervisor at Etna, Aaron regularly asked for my perspective on complex client, product, and organizational questions. He trusted my expertise, challenged my thinking in productive ways, and gave me room to take ownership. I especially appreciated that he treated me as a thought partner rather than simply someone responsible for carrying out a directive.',
		name: 'Jessica White',
		title: 'Director of Marketing Strategy, Etna Interactive (reported to Aaron)',
	},
	{
		quote:
			'Aaron was involved with helping GoFundMe with innovative marketing strategy, including helping us define niches, start our first paid advertising campaigns, working with our advertising agency, and training our first in-house marketing team.',
		name: 'Andrew Ballester',
		title: 'Co-Founder, GoFundMe',
		current: 'Co-founder and CPO, EyePop.ai',
	},
	{
		quote:
			'Aaron is a great writer, marketing and branding advisor. He worked for me developing branding collateral, marketing strategy and a TV commercial for a company I was starting.',
		name: 'Ryan Windham',
		title: 'Founder & VC',
	},
];

export const CLAIM_QUOTES = {
	growth: [
		{
			quote: 'Transformed our SEO visibility, grew digital marketing revenue while cutting inefficiency.',
			name: 'Richie Hannah',
			title: 'Managed Aaron at GreatCall',
			current: 'Founder and CEO, Yellow Cap Media',
		},
		{
			quote: 'My go-to innovator of marketing strategy.',
			name: 'Sarah Rowlett',
			title: 'Senior Account Director, TrendSource',
			current: 'Account Director (ex-Google)',
		},
	],
	org: [
		{
			quote: "So far he's been the best manager I've ever had.",
			name: 'Kristina Simmons',
			title: 'Direct report at GreatCall',
			current: 'Sr. Marketing Manager, Quiksilver',
		},
	],
	tech: [
		{
			quote: 'Helping us define niches, start our first paid advertising campaigns.',
			name: 'Andy Ballester',
			title: 'Co-founder, GoFundMe',
			current: 'Co-founder and CPO, EyePop.ai',
		},
		{
			quote: 'Build and present clear strategies to leaders that help ensure a brand remains relevant.',
			name: 'Ed Mallory',
			title: 'CEO, Voxox / Telcentris era',
			current: 'CEO, Ring4.com',
		},
	],
};
