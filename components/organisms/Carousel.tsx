'use client'

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '../molecules/CarouselArrowButtons'
import PerkTreeList from '../molecules/PerkTreeList'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: Array<any>
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((tree, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__content">
                <PerkTreeList perks={tree.perks} />
                <div className="embla__slide__title">{tree.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default Carousel