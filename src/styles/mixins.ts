import { css } from 'styled-components'

export const mixins = {
    fonts: {
        titleXL: css`
            font: 800 3rem 'Baloo 2', sans-serif;
            line-height: 1.3;
        `,
        titleL: css`
            font: 800 2rem 'Baloo 2', sans-serif;
            line-height: 1.3;
        `,
        titleM: css`
            font: 800 1.5rem 'Baloo 2', sans-serif;
            line-height: 1.3;
        `,
        titleS: css`
            font: 700 1.25rem 'Baloo 2', sans-serif;
            line-height: 1.3;
        `,
        titleXS: css`
            font: 700 1.125rem 'Baloo 2', sans-serif;
            line-height: 1.3;
        `,
        textL: css`
            font: 400 1.25rem Roboto, sans-serif;
            line-height: 1.3;
        `,
        textM: css`
            font: 400 1rem Roboto, sans-serif;
            line-height: 1.3;
        `,
        textS: css`
            font: 400 0.875rem Roboto, sans-serif;
            line-height: 1.3;
        `,
        textXS: css`
            font: 700 0.75rem Roboto, sans-serif;
            line-height: 1.3;
        `,
        tag: css`
            font: 700 0.625rem Roboto, sans-serif;
            line-height: 1.3;
        `,
        buttonG: css`
            font: 700 0.875rem Roboto, sans-serif;
            line-height: 1.6;
        `,
        buttonM: css`
            font: 400 0.75rem Roboto, sans-serif;
            line-height: 1.6;
        `,
    }
}