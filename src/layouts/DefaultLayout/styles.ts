import styled from 'styled-components'

export const LayoutContainer = styled.div`
    max-width:90rem;
    margin: auto;
    padding: 2.5rem;

    background: ${(props) => props.theme['background']};
`;