import React from 'react'
import SectionTemplate from '../SectionTemplate'
import { Carousel } from 'react-responsive-carousel'
import { PictureSlider, Text } from './ArtworksSection.styles'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CatSketch from '../../assets/catsketch.jpg'
import ThanosSketch from '../../assets/thanos.jpg'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
};

const ArtWorksSection = () => {
    return (
        <SectionTemplate title={"My Artworks"}>
            <Text>While web development is my main focus, I’m also an artist who enjoys sketching in my free time. I find that working on sketches helps balance my technical side with creativity, giving me fresh perspectives on both art and code.</Text>
            <PictureSlider>
                <Carousel
                    showThumbs={false}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <KeyboardArrowLeft onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }} />
                        )
                    }
                    autoPlay={true}
                    infiniteLoop={true}
                    dynamicHeight={true}
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <KeyboardArrowRight onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }} />
                        )
                    }
                >
                    <img src={CatSketch} />
                    <img src={ThanosSketch} />
                    <img src={CatSketch} />
                </Carousel>
            </PictureSlider>
        </SectionTemplate>
    )
}

export default ArtWorksSection