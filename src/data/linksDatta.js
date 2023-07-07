import { facebook, instagram, linkedin, twitter } from '../../public/assets';
//////////////////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////// NAV MEDIA LINKS/////////////////////////////
//
//
//////////////////////////////////////////////////////////////////////////////////////
export const navLinks = [
  {
    id: '/',
    title: 'Home',
  },
  {
    id: '/#services',
    title: 'Services',
  },
  {
    id: '/about',
    title: 'About',
  },
  {
    id: '/portfolio',
    title: 'Portfolio',
  },
];

export const footerLinks = [
  {
    title: 'Contact Us',
    links: [
      {
        name: 'info@helion-studio.com',
        link: 'mailto:info@helion-studio.com',
      },
      {
        name: '+27 870126131',
        link: 'tel:0870126131',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'About Us',
        link: '/about',
      },
      {
        name: 'Services',
        link: '/services',
      },
      {
        name: 'Technology',
        link: '/technology',
      },
    ],
  },
  {
    title: 'Services',
    links: [
      {
        name: 'Dedicated Development Team',
        link: '/services/Dedicated-Development-Team',
      },
      {
        name: 'Custom Software Development',
        link: '/services/Custom-Software-Development',
      },
      {
        name: 'Front-end Development',
        link: '/technology/front-end',
      },
    ],
  },
];
//////////////////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////// SOCIAL MEDIA LINKS/////////////////////////////
//
//
//////////////////////////////////////////////////////////////////////////////////////
export const socialMedia = [
  {
    id: 'social-media-1',
    icon: '/assets/instagram.svg',
    alt:'Helion Studio on Instagram',
    link: 'https://www.instagram.com/helion_studio_',
  },
  {
    id: 'social-media-2',
    icon: '/assets/facebook.svg',
    alt:'Helion Studio on Facebook',
    link: 'https://www.facebook.com/helionstudiocompany',
  },
  {
    id: 'social-media-3',
    icon: '/assets/twitter.svg',
    alt:'Helion Studio on Twitter',
    link: 'https://twitter.com/helion_studio',
  },
  {
    id: 'social-media-4',
    icon: '/assets/linkedin.svg',
    alt:'Helion Studio On Linkedin',
    link: 'https://www.linkedin.com/',
  },
];
