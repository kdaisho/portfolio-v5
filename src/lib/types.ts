export type Filters = {
	checked: boolean;
	value: number;
	filterTerms: Set<number>;
};

export type Project = {
	id: number;
	title: string;
	subtitle: string;
	description: string;
	stack: string[];
	hero: string;
	thumb: string;
	url: string;
	githubUrl: string;
};
