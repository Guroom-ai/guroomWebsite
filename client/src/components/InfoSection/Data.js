//All the screen pages are implemented on this file 

// setting the about page background dark
export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'PREMIUM APPLICATION',
    headline: 'Your Personal Work Assistant',
    description: 'Get access to our exclusive app that allows you to enhance and organize your work environment',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require('../../images/svg-1.svg').default,
    alt: 'workspace',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'UNLIMITED ACCESS',
    headline: "Always Working So You Can Enjoy More",
    description: 'Once you open an account with us, our algorithm will take care of your workspace 24/7',
    buttonLabel: 'Get Started',
    imgStart: true,
    img: require('../../images/svg-2.svg').default,
    alt: 'discovery',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'download',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Get Started Today!',
    headline: 'Experience your personal work assistant today!',
    description: "Get everything set up and ready in under 5 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: 'Download Now',
    imgStart: false,
    img: require('../../images/svg-3.svg').default,
    alt: 'downloadnow',
    dark: false,
    primary: false,
    darkText: true
};
