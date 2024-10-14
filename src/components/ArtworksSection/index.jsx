import React from 'react'
import SectionTemplate from '../SectionTemplate'
import { Carousel } from 'react-responsive-carousel'
import { PictureSlider, Text } from './ArtworksSection.styles'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Art1 from '../../assets/catsketch.jpg'
import Art2 from '../../assets/thanos.jpg'
import Art3 from '../../assets/art3.jpg'
import Art4 from '../../assets/art4.jpg'
import Art5 from '../../assets/art5.jpg'
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
                    <img src={Art1} />
                    <img src={Art2} />
                    <img src={Art3} />
                    <img src={Art4} />
                    <img src={Art5} />
                </Carousel>
            </PictureSlider>
        </SectionTemplate>
    )
}

export default ArtWorksSection