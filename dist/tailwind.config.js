"use strict";
const HodooContent = [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
    './node_modules/hodoo-design/**/*.{js,jsx,ts,tsx}',
];
const HodooTheme = {
    extend: {
        colors: {
            gray: {
                950: '#030616',
                900: '#101729',
                800: '#20293A',
                700: '#364253',
                600: '#4A5667',
                500: '#677589',
                400: '#97A3B6',
                300: '#CDD5E0',
                200: '#E3E8EF',
                100: '#F2F5F9',
                50: '#F8FAFC',
            },
            blue: {
                900: '#233876',
                800: '#1E429F',
                700: '#1A56DB',
                600: '#1C64F2',
                500: '#3F83F8',
                400: '#76A9FA',
                300: '#A4CAFE',
                200: '#C3DDFD',
                100: '#E1EFFE',
                50: '#EBF5FF',
            },
            red: {
                900: '#771D1D',
                800: '#9B1C1C',
                700: '#C81E1E',
                600: '#E02424',
                500: '#F05252',
                400: '#F98080',
                300: '#F8B4B4',
                200: '#FBD5D5',
                100: '#FDE8E8',
                50: '#FDF2F2',
            },
            orange: {
                900: '#771D1D',
                800: '#8A2C0D',
                700: '#B43403',
                600: '#D03801',
                500: '#FF5A1F',
                400: '#FF8A4C',
                300: '#FDBA8C',
                200: '#FCD9BD',
                100: '#FEECDC',
                50: '#FFF8F1',
            },
            yellow: {
                900: '#633112',
                800: '#723B13',
                700: '#8E4B10',
                600: '#9F580A',
                500: '#C27803',
                400: '#E3A008',
                300: '#FACA15',
                200: '#FCE96A',
                100: '#FDF6B2',
                50: '#FDFDEA',
            },
            green: {
                900: '#014737',
                800: '#03543F',
                700: '#046C4E',
                600: '#057A55',
                500: '#0E9F6E',
                400: '#31C48D',
                300: '#84E1BC',
                200: '#BCF0DA',
                100: '#DEF7EC',
                50: '#F3FAF7',
            },
            teal: {
                900: '#014451',
                800: '#05505C',
                700: '#036672',
                600: '#047481',
                500: '#0694A2',
                400: '#16BDCA',
                300: '#7EDCE2',
                200: '#AFECEF',
                100: '#D5F5F6',
                50: '#EDFAFA',
            },
            /**
             * @see https://www.figma.com/file/QlHmG2SY3YhYCw7lRsQuiR/%ED%98%B8%EB%91%90%EB%9E%A9%EC%8A%A4-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?type=design&node-id=3877%3A4142&mode=dev
             * 디자인시스템에선 talktreeGreen이라 돼있음 사용성을 위해 글자 크기 줄임
             */
            t_green: {
                600: '#007F3A',
                500: '#00D361',
                400: '#66E5A0',
                300: '#99EDC0',
                200: '#BFF4D7',
                100: '#D9F8E7',
                50: '#F2FDF7',
            },
            indigo: {
                900: '#362F78',
                800: '#42389D',
                700: '#5145CD',
                600: '#5850EC',
                500: '#6875F5',
                400: '#8DA2FB',
                300: '#B4C6FC',
                200: '#CDDBFE',
                100: '#E5EDFF',
                50: '#F0F5FF',
            },
            purple: {
                900: '#4A1D96',
                800: '#5521B5',
                700: '#6C2BD9',
                600: '#7E3AF2',
                500: '#9061F9',
                400: '#AC94FA',
                300: '#CABFFD',
                200: '#DCD7FE',
                100: '#EDEBFE',
                50: '#F6F5FF',
            },
            pink: {
                900: '#751A3D',
                800: '#99154B',
                700: '#BF125D',
                600: '#D61F69',
                500: '#E74694',
                400: '#F17EB8',
                300: '#F8B4D9',
                200: '#FAD1E8',
                100: '#FCE8F3',
                50: '#FDF2F8',
            },
        },
    },
};
const HodooVariants = {
    extend: {
        screens: {},
    },
};
const HodooDarkMode = ['false'];
module.exports = { HodooContent, HodooTheme, HodooVariants, HodooDarkMode };
