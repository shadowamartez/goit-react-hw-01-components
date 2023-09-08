import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 40px;
    background-color: #fff5f5;
`;

export const TableHeader = styled.th`
    padding: 10px;
    background-color: #fff5f5;
    border: 1px solid #ffcccb;
    color: #ff1493;
`;

export const TableRow = styled.tr`
    &:nth-child(odd) {
        background-color: #f9f9f9; 
    }
`;

export const TableCell = styled.td`
    padding: 10px;
    border: 1px solid #ffcccb; 
    color: #ff69b4;
`;

