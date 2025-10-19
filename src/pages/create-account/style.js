import styled from 'styled-components';


// Row - Flex container com wrap
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;

export const ColLg6 = styled.div`
    width: 100%;

    /* Small devices (≥576px) */
    @media (min-width: 576px) {
        flex: 0 0 100%;
        max-width: 100%;
    }

    /* Medium devices (≥768px) */
    @media (min-width: 768px) {
        flex: 0 0 100%;
        max-width: 100%;
    }

    /* Large devices (≥992px) */
    @media (min-width: 992px) {
        flex: 0 0 50%;
        max-width: 50%;
    }

    /* Extra large devices (≥1200px) */
    @media (min-width: 1200px) {
        flex: 0 0 50%;
        max-width: 50%;
    }

    /* Extra extra large devices (≥1400px) */
    @media (min-width: 1400px) {
        flex: 0 0 50%;
        max-width: 50%;
    }
`;

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    line-height: 44px;
    margin-top: -13rem;
    color: #FFFFFF;
`

export const TitleCreateAccount = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 29px;
    line-height: 44px;
    margin-bottom: 8px;
`

export const DivErro = styled.div`
    color: red;
    font-family: 'Open Sans';
    font-size: 14px;
    margin-bottom: 15px;
`;

export const TextoTermo = styled.p`
    color: #ffffff;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 14px;
    margin-top: 20px;
`;