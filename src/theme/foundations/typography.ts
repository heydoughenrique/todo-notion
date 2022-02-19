export const typography = {
    fonts: {
        body: 'Inter, sans-serif',
        heading: 'Inter, sans-serif',
    },

    styles: {
        global: {
            'h1, h2, h3, h4, h5': {
                color: 'neutral.900',
            },

            h1: {
                fontSize: '6xl', // 60px
                lineHeight: '1',
                fontWeight: '500'
            },

            h2: {
                fontSize: '4xl', // 36px
                lineHeight: 'shorter',
                fontWeight: '500'
            },

            h4: {
                fontSize: 'lg', // 36px
                fontWeight: '700'
            },


            'p, a': {
                color: 'neutral.900',
                fontSize: 'md'
            },

        },

        defaultProps: {
            p: {
                fontSize: '9xl'
            },
        }
    },
}
