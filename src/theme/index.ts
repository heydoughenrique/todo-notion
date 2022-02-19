import { extendTheme } from "@chakra-ui/react"
import foundations from './foundations'
import * as components from './components';

export const theme = extendTheme({
    ...foundations,
    components: { ...(components as any) },

    layerStyles: {
        base: {
            bg: 'gray.50',
            border: '2px solid',
            borderColor: 'gray.500',
        },

        secondary: {
            bg: 'secondary.200',
            color: 'neutral.600',
            'h1, h2, h3, h4, h5': {
                color: 'neutral.600'
            },
            'p, a': {
                color: 'neutral.800'
            }

        },

        neutral: {
            bg: 'neutral.800',
            color: 'neutral.100',
            'h1, h2, h3, h4, h5': {
                color: 'neutral.500'
            },
            'p, a': {
                color: 'neutral.100'
            }

        },
    },
})

