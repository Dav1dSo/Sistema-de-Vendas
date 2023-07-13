import styled from 'styled-components';

export const BackGroundContainer = styled.div`
    background-image: linear-gradient(to right, black, #00d4ff);
    position: absolute;
    height: 100vh;
    width: 100%;    
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 1;
`;

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient( black, #00d4ff);
    max-width: 650px;
    right: 0;
    top: 0;
    width: 100%;
    position: absolute;
    height: 100vh;
    z-index: 2;
`;

export const LimitedContainer = styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const IconLogin = styled.img`
    width: 25vw;
`;
