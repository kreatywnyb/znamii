export interface Media {
	id: number;
	url: string;
	width: number | null;
	height: number | null;
	description: string;
	alt: string;
}

export interface MediaItem extends Media {
	type: string;
}

export interface Video {
	id: number;
	url: string;
	type?: string;
	mime: string;
	filesize?: number | null;
	length?: number | null;
	title: string;
}

export interface Category {
	id: number;
	name: string;
	slug: string;
}

export interface Meta {
	title: string;
	description: string;
	keywords: string;
}

export interface CaseStudyDetailsResponse {
	id: number;
	title: string;
	slug: string;
	date: string;
	caseStudyData: {
		company: string;
		year: string;
		industry: string;
		industryArray: string[];
		scopeOfWork: string;
		scopeArray: string[];
		mainPhoto: Media;
		mainVideo: Video;
		gallery: MediaItem[];
		videos: Video[];
		category: Category[];
		descriptionLeft: string;
		descriptionRight: string;
		doubleImageSectionsIndexes: number[];
		meta: Meta;
	};
}

export interface CaseStudyResponse {
	id: number;
	title: string;
	slug: string;
	link: string;
	company: string;
	mainPhoto: Media;
	mainVideo: Video;
	category: Category[];
}

export interface CaseStudyParams {
	category?: string;
	showOnHomePage?: boolean;
	showOnServicePage?: boolean;
  }

export type CaseStudyListResponse = CaseStudyResponse[];
