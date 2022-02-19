export default {
    // style object for base or default style
    baseStyle: {
        textTransform: 'capitalize',
        fontWeight: '400',
        fontSize: 'md',

    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
        solid: {
            bg: "primary.500",
            color: "white",
            boxShadow: "xl",

            _hover: {
                bg: "primary.600",

            },

        },
        outline: {
            bg: "none",
            color: "primary.500",
            borderColor: "primary.500",

            _hover: {
                bg: "none",
                color: "primary.600",
                borderColor: "primary.600",
            },
        }
    },
    // default values for `size` and `variant`
    defaultProps: {
        size: 'lg',
        variant: 'solid',
    }
}



