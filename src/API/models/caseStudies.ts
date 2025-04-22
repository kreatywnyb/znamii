export interface Media {
	id: number;
	url: string;
	width?: number | null;
	height?: number | null;
	description?: string;
	alt?: string;
	caption?: string;
	animateDesktop: boolean;
	animateMobile:boolean;
}

export interface MediaItem extends Media {
	type: string;  // Either "image" or another media type
}

export interface Video {
    id: number;
    url: string;
    type: string;  // Will be "video"
    mime: string;
    caption?: string;
    filesize?: number | null;
    length?: number | null;
    title: string;
    noControls?: boolean;
    muted?: boolean;
    loop?: boolean;
    autoplay?: boolean;
    playsInline?: boolean;
    description?: string;
	animateDesktop: boolean;
	animateMobile:boolean;
}

// Combined media type for unified handling
export type CombinedMediaItem = MediaItem | Video;

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
		// Either use the separate arrays
		gallery: MediaItem[];
		videos: Video[];
		// Or use a combined media array if your API returns it that way
		media?: CombinedMediaItem[];
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

// Helper functions for type checking
export const isVideo = (media: CombinedMediaItem): media is Video => {
	return media.type === "video";
};

export const isImage = (media: CombinedMediaItem): media is MediaItem => {
	return media.type === "image";
};