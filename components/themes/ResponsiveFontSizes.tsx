interface responsiveFontType {
    xs: number
    sm: number
    md: number
    lg: number
}

const breakpoints = {
    values: {
        xs: 0,
        sm: 480, // Phone
        md: 768, // Tablet/Laptop
        lg: 1024, // Desktop
        xl: 1200
    }
}

export function responsiveFontSizes({ xs, sm, md, lg }: responsiveFontType) {
    return {
        [`@media screen and (min-width: 0px)`]: {
            fontSize: `${(xs)}px`,
        },
      [`@media screen and (min-width: 480px)`]: {
        fontSize: `${(sm)}px`,
      },
      [`@media screen and (min-width: 768px)`]: {
        fontSize: `${(md)}px`,
      },
      [`@media screen and (min-width: 1024px)`]: {
        fontSize: `${(lg)}px`,
      },
    };
  }