import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Chip, Avatar, FontIcon } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {
  ActionStars as StarIcon,
  HardwareSecurity as CertIcon
 } from 'material-ui/svg-icons';

const styles = {
  chip: {
    margin: 4,
  },
};


const Landlord = () => (
  <Card>
    <CardHeader
      title="Ron B"
      subtitle="Landlord"
      avatar="http://www.material-ui.com/images/jsa-128.jpg"
    />
    {/* <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="http://www.material-ui.com/images/jsa-128.jpg" alt="" />
    </CardMedia> */}
    <CardTitle title="Bio" subtitle="Landlord since 2007" />
    <CardText>
      <Chip
        style={styles.chip}
      >
        <Avatar icon={
          <StarIcon />
        } />
        4 star client rating
      </Chip>
      <Chip
        style={styles.chip}
      >
        <Avatar icon={
          <CertIcon />
        } />
        Certified Landlord
      </Chip>
    </CardText>
    <CardActions>
      <RaisedButton backgroundColor="#74667b" labelColor="#fff" label="Call" />
      <RaisedButton backgroundColor="#74667b" labelColor="#fff" label="Report" />
      <RaisedButton backgroundColor="#86a7a2" labelColor="#fff" label="Apply" />
    </CardActions>
  </Card>
);

export default Landlord;
