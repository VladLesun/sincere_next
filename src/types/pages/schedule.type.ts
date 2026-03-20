export interface IPlanContent {
	number: string;
	title: string;
	text: string;
}

export interface IPlans {
	title: string;
	list: IPlanContent[];
	preButton: string;
}

export interface ISchedulePage {
	plansSection: IPlans;
}
