export interface ISlide {
	text: string;
	author: string;
}

export interface ICarousel {
	slides: ISlide[];
	activeId: number;
	onSelect: (id: number) => void;
}

export interface ICarouselActions {
	slides: ISlide[];
	nextSlide: () => void;
	prevSlide: () => void;
	activeId: number;
	onSelect: (id: number) => void;
}
