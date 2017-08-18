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
      subtitle="Landlord since 2007"
      avatar="http://www.material-ui.com/images/jsa-128.jpg"
    />
    {/* <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="http://www.material-ui.com/images/jsa-128.jpg" alt="" />
    </CardMedia> */}
    {/* <CardTitle title="Bio" subtitle="" /> */}
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
          <StarIcon />
        } />
        4 star unit rating
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
      <RaisedButton fullWidth style={{marginBottom: 3}} backgroundColor="#86a7a2" labelColor="#fff" label="Apply" />
      <RaisedButton fullWidth style={{marginBottom: 3}} backgroundColor="#74667b" labelColor="#fff" label="Call" />
      <RaisedButton fullWidth style={{marginBottom: 3}} backgroundColor="#74667b" labelColor="#fff" label="Report" />
    </CardActions>
  </Card>
);

export default Landlord;
