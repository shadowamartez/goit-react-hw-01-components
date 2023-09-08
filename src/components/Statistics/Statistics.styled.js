import styled from 'styled-components';

export const Layout = styled.section`
    margin-top: 40px;
    display: grid;
    grid-template-rows: auto 1fr; 
    gap: 20px; 
    text-align: center; 
    background-color: #fff5f5;
`;

export const Title = styled.h2`
    font-size: 24px;
    margin: 50px;
    color: #ff1493;
    padding: 40px 20px; 
    border: 1px solid #ffcccb;
`; 

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 40px;
`; 

export const ListItem = styled.li`
    text-align: center;
`;

export const Label = styled.span`
    font-weight: bold;
    color: #ff69b4;
`;

export const Percentage = styled.span`
    color: #ff69b4;
`;