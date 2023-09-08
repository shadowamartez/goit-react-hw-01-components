import PropTypes from 'prop-types';
import { Img, Name, Card, Tag, Location, List, ListItem, Label, LabelQuantity } from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Card className="profile">
            <div className="description">
                <Img
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <Name className="name">{username}</Name>
                <Tag className="tag">@{tag}</Tag>
                <Location className="location">{location}</Location>
            </div>

            <List className="stats">
                <ListItem>
                    <Label className="label">Followers</Label>
                    <b> </b>
                    <LabelQuantity className="quantity">{stats.followers}</LabelQuantity>
                </ListItem>
                <ListItem>
                    <Label className="label">Views</Label>
                    <b> </b>
                    <LabelQuantity className="quantity">{stats.views}</LabelQuantity>
                </ListItem>
                <ListItem>
                    <Label className="label">Likes</Label>
                    <b> </b>
                    <LabelQuantity className="quantity">{stats.likes}</LabelQuantity>
                </ListItem>
            </List>
        </Card>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};


export default Profile;