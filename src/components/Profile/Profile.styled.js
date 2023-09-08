import styled from 'styled-components';

export const Card = styled.div`
    border: 1px solid #ffcccb; 
    padding: 20px;
    width: 300px;
    margin: 0 auto;
    text-align: center;
    background-color: #fff5f5;
`;

export const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #ffb6c1; 
`;

export const Name = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 10px;
    color: #ff1493;
`;

export const Tag = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 10px;
    color: #ff69b4;
`;

export const Location = styled.p`
    color: #ff69b4;
    margin-top: 5px;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`;

export const ListItem = styled.li`
    text-align: center;
`;


export const Label = styled.span`
    font-weight: bold;
    color: #ff69b4;
`;

export const LabelQuantity = styled.span`
    color: #ff69b4;
`;