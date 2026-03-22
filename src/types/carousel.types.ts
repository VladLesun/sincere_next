export interface ISlide {
	text: string;
	author: string;
}

export interface ICarousel {
	slides: ISlide[];
}

export interface ICarouselActions {
	slides: ISlide[];
	nextSlide: () => void;
	prevSlide: () => void;
}
