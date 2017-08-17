import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: '#86a7a2',
    fontFamily: 'Roboto, sans-serif',
  },
};

const tilesData = [
  {
    img: 'https://photos.zillowstatic.com/p_c/ISi75c0e2nwt241000000000.jpg',
    title: 'Entrance',
    // author: 'jill111',
  },
  {
    img: 'https://photos.zillowstatic.com/p_c/IS6qrk4ssii0px0000000000.jpg',
    title: 'Dining Room',
    // author: 'pashminu',
  },
  {
    img: 'https://photos.zillowstatic.com/p_c/ISa130i7yeow241000000000.jpg',
    title: 'Bedroom #1',
    // author: 'Danson67',
  },
  {
    img: 'https://photos.zillowstatic.com/p_c/IS6msepva7wmwx0000000000.jpg',
    title: 'Bedroom #2',
    // author: 'fancycrave1',
  },
  {
    img: 'https://photos.zillowstatic.com/p_c/ISybnxldosv5rz0000000000.jpg',
    title: 'Bedroom #3',
    // author: 'fancycrave1',
  },
  {
    img: 'https://photos.zillowstatic.com/p_c/IS62t9aahh83lk1000000000.jpg',
    title: 'Kitchen',
    // author: 'fancycrave1',
  },
  // 'https://photos.zillowstatic.com/p_c/ISi75c0e2nwt241000000000.jpg',
  // 'https://photos.zillowstatic.com/p_c/IS6qrk4ssii0px0000000000.jpg',
  // 'https://photos.zillowstatic.com/p_c/ISa130i7yeow241000000000.jpg',
  // 'https://photos.zillowstatic.com/p_c/IS6msepva7wmwx0000000000.jpg',

];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const Slider = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          // actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Slider;
