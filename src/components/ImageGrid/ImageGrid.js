import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadImages } from '../../actions'
import './styles.css';
import Button from '../Button'
import Stats from '../Stats';


class ImageGrid extends Component {
    state = {
        images: [],
    };

    componentDidMount() {
        this.props.loadImages()
    }

    render() {
        const { isLoading, images, loadImages, error, imageStats } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images && images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <Stats stats={imageStats[image.id]} />
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
                {error && <div className='error'>{JSON.stringify(error)}</div>}
                <Button
                    onClick={() => !isLoading && loadImages()}
                    loading={isLoading}
                >
                    Load More
                </Button>
            </div>
        );
    }
}


const mapStateToProps = ({ isLoading, images, error, imageStats }) => {
    return {
        isLoading,
        images,
        error,
        imageStats,
    }
}

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()) //! function call로 넣어줘야 함
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageGrid);
