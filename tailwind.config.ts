import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },

            animation: {
                spotlight: 'spotlight 2s ease .75s 1 forwards',
            },

            gridTemplateColumns: {
                sidebar: '300px auto', //for sidebar layout
                'sidebar-collapsed': '64px auto', //for collapsed sidebar layout
            },

            keyframes: {
                spotlight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate(-72%, -62%) scale(0.5)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(-50%,-40%) scale(1)',
                    },
                },
            },
        },
    },
    darkMode: 'class',
    plugins: [
        nextui(),
        require('tailwindcss-animate'),
        require('@tailwindcss/typography'),
    ],
};
export default config;
