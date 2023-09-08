import PropTypes from 'prop-types';
import { List, Item, Status, Img, Name } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Item className="item">
            <Status className="status" isOnline={isOnline}></Status>
            <Img className="avatar" src={avatar} alt="User avatar" width="48" />
            <Name className="name">{name}</Name>
        </Item>
    );
};

export const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
            ))}
        </List>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FriendList; 