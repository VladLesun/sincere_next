export interface IHero {
	topText: string;
	bottomText: string;
}

export interface IHelps {
	title: string;
	description: string;
}

export interface IImg {
	src: string;
	alt: string;
}

export interface IServicesPage {
	heroSection: IHero[];
	helpsSection: IHelps[];
	bottomImgSection: IImg;
}
