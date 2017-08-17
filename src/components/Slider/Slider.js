// @flow
import React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// import './Slide.css';
import Carousel from 'nuka-carousel';

const photos = [
  'https://photos.zillowstatic.com/p_c/ISi75c0e2nwt241000000000.jpg',
  'https://photos.zillowstatic.com/p_c/IS6qrk4ssii0px0000000000.jpg',
  'https://photos.zillowstatic.com/p_c/ISa130i7yeow241000000000.jpg',
  'https://photos.zillowstatic.com/p_c/IS6msepva7wmwx0000000000.jpg',
]

const Slider = function Slider (props: Props) {
  if (!photos) return null;

  // console.log('photos', photos);

  return (
    <Carousel>
      <img src="https://photos.zillowstatic.com/p_c/ISi75c0e2nwt241000000000.jpg" />
      <img src="https://photos.zillowstatic.com/p_c/ISi75c0e2nwt241000000000.jpg" />
      // {/* {photos.map(p => <img key={p} src={p} />)} */}
    </Carousel>
  );
};

export default Slider;


// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
//
// export default class Slider extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [
//         'https://photos.zillowstatic.com/p_c/ISi75c0e2nwt241000000000.jpg',
//         'https://photos.zillowstatic.com/p_c/IS6qrk4ssii0px0000000000.jpg',
//         'https://photos.zillowstatic.com/p_c/ISa130i7yeow241000000000.jpg',
//         'https://photos.zillowstatic.com/p_c/IS6msepva7wmwx0000000000.jpg',
//       ],
//       current: 0,
//       isNext: true
//     };
//
//     this.handlerPrev = this.handlerPrev.bind(this);
//     this.handlerNext = this.handlerNext.bind(this);
//     this.goToHistoryClick = this.goToHistoryClick.bind(this);
//   }
//
//   handlerPrev() {
//     let index = this.state.current,
//         length = this.state.items.length;
//
//     if( index < 1 ) {
//       index = length;
//     }
//
//     index = index - 1;
//
//     this.setState({
//       current: index,
//       isNext: false
//     });
//   }
//
//   handlerNext() {
//     let index = this.state.current,
//         length = this.state.items.length - 1;
//
//     if( index == length ) {
//       index = -1;
//     }
//
//     index = index + 1;
//
//     this.setState({
//       current: index,
//       isNext: true
//     });
//   }
//
//   goToHistoryClick( curIndex, index ) {
//     let next = (curIndex < index);
//     this.setState({
//       current: index,
//       isNext: next
//     });
//   }
//
//   render(){
//     let index = this.state.current,
//         isnext = this.state.isNext,
//         src = this.state.items[index];
//
//     return (
//       <div className="app">
//         <div className="carousel">
//          <ReactCSSTransitionGroup
//             transitionName={{
//             enter: isnext ? 'enter-next' : 'enter-prev',
//             enterActive: 'enter-active',
//             leave: 'leave',
//             leaveActive: isnext ? 'leave-active-next' : 'leave-active-prev'
//           }}
//            >
//              <div className="carousel_slide" key={index}>
//                <img src={src}/>
//              </div>
//            </ReactCSSTransitionGroup>
//            <button className="carousel_control carousel_control__prev" onClick={this.handlerPrev}><span></span></button>
//            <button className="carousel_control carousel_control__next" onClick={this.handlerNext}><span></span></button>
//           <div className="carousel_history">
//             <History
//               current={this.state.current}
//               items={this.state.items}
//               changeSilde={this.goToHistoryClick}
//             />
//           </div>
//           </div>
//       </div>
//     )
//   }
// }
//
// class History extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     let current = this.props.current;
//     let items = this.props.items.map( (el, index) => {
//       let name = (index == current) ? 'active' : '';
//       return (
//         <li key={index}>
//           <button
//             className={name}
//             onClick={ () => this.props.changeSilde(current, index) }
//           ></button>
//         </li>
//       )
//     });
//
//     return (
//       <ul>{items}</ul>
//     )
//   }
// }
