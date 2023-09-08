import PropTypes from 'prop-types';
import { Layout, Title, List, ListItem, Label, Percentage } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
        <Layout className="statistics">
            {title && <Title className="title">{title}</Title>}
            <List className='stat-list'>
                {stats.map(({ id, label, percentage }) => (
                    <ListItem className='item' key={id}>
                        <Label className='label'>{label}</Label>
                        <b> </b>
                        <Percentage className='percentage'>{percentage}%</Percentage>
                    </ListItem>
                ))}
            </List>    
        </Layout>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Statistics;