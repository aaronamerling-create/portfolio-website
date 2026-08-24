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
				name: 'The Lemonade Agency',
				caption: 'VP of Strategy',
				logo: 'lemonade.png',
			},
			{
				name: 'Team Lewis',
				caption: 'Managing Director, Digital USA',
				logo: 'team-lewis.png',
			},
			{
				name: 'Voxox / Telcentris',
				caption: 'Director of Marketing and Product Innovation',
				logo: 'voxox.png',
			},
			{
				name: 'GAIN Credit',
				caption: 'Sr. Manager, Digital Product and Marketing',
				logo: 'gain-credit.png',
			},
			{
				name: 'Best Buy Health (GreatCall)',
				caption: 'Sr. Manager, Digital and Mobile Product and Marketing',
				logo: 'best-buy.svg',
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
				logo: 'sf-marathon.png',
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
			"Aaron has a well-honed set of skills across both product and marketing that are invaluable to any organization. His breadth of experience across the complete product lifecycle, from research and ideation to strategic planning and execution, is unmatched. Through his ability to make connections with prospects and customers and then learn an industry inside and out, he is able to build and present clear strategies to leaders that help ensure a brand, its products and the company as a whole remain relevant well into the future. It was a pleasure to work side by side with Aaron for years, and I am truly better for it.",
		name: 'Ed Mallory',
		title: 'CEO, Voxox / Telcentris era',
		current: 'CEO, Ring4.com',
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
			'Aaron is one of the most dedicated and focused digital marketing directors I have had the pleasure of working with over the past 10 years. He is an excellent communicator and an incredibly strategic thinker when it comes to delivering a true multi-channel digital marketing strategy. He also has an uncanny ability to execute and deliver at all levels. I learned a great deal from Aaron and hope to have the opportunity to work with him again in the future.',
		name: 'Jeffrey Tompkins',
		title: 'Director of Operations, Jacob Tyler Brand + Digital Agency',
	},
	{
		quote:
			"It was my pleasure to work closely with Aaron for over two years at GreatCall. He impressed me immediately with his drive, passion, speed and intelligence, and quickly built strong relationships as he worked across internal teams and external agencies. In his digital marketing role, Aaron transformed our SEO visibility, grew digital marketing revenue while cutting inefficiency, and spearheaded many ideas and projects that quickly grew GreatCall's digital capabilities. Then, with focus on our mobile apps, he managed the teams that brought strategically-important apps to market, gaining us #1 positions in the iTunes and Google Play apps store medical category for not just one, but two of our apps. Aaron is fun to work with, and delivers concrete results. I'd happily recommend him to any company that needs best-in-class digital marketing and app management.",
		name: 'Richie Hannah',
		title: 'Managed Aaron at GreatCall',
		current: 'Founder and CEO, Yellow Cap Media',
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
