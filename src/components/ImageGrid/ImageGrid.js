import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions';
import './styles.css';
import Button from '../common/Button';

class ImageGrid extends Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { images, error, isLoading, loadImages } = this.props;
    return (
      <div className="content">
        <section className="grid">
          {images.map(image => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
        </section>
        <Button onClick={!isLoading && loadImages} loading={isLoading}>
          Load more
        </Button>
        {error && <div className="error">{JSON.stringify(error)}</div>}
      </div>
    );
  }
}

const mapStateToProps = ({ imagesReducer, loadingReducer, errorReducer }) => ({
  images: imagesReducer.images,
  isLoading: loadingReducer.isLoading,
  error: errorReducer.error,
});

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
