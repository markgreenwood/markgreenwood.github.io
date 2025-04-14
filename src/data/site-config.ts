export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://markgreenwood.github.io',
    title: "Mark's Site",
    subtitle: 'Mark Greenwood - Software Engineer',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // },
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/markgreenwood/'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/markjgreenwood/'
        },
        {
            text: 'Bluesky',
            href: 'https://bsky.app/markgreenwood-pdx.bsky.social/'
        }
    ],
    hero: {
        title: 'Welcome to my musings on all things software engineering...',
        text: "I'm **Mark Greenwood**, a software engineer promoting energy efficiency and environmental sustainability. Feel free to explore some of my coding endeavors on <a href='https://github.com/markgreenwood'>GitHub</a> or follow me on <a href='https://bsky.app/'>Bluesky</a>.",
        image: {
            src: '/Mark_at_desk.jpg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
