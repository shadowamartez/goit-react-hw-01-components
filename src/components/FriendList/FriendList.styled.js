import styled from 'styled-components';

export const List = styled.ul`
    margin-top: 40px;
    `;

export const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff5f5;
`;

export const Status = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: ${(props) => (props.isOnline ? '#00FF00' : '#ff1493')};
`;

export const Img = styled.img`
    width: 48px;
    height: 48px;
`;  

export const Name = styled.p`
    font-size: 18px;
    color: #ff69b4;
    margin-left: 10px;
    font-weight: bold;
`;  
