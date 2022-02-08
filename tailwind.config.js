module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [
        /**
         * Support multiline truncate
         * https://github.com/tailwindlabs/tailwindcss/discussions/1826#discussioncomment-18805
         */
        require('@tailwindcss/line-clamp'),
    ],
};
