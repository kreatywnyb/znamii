import CaseStudy from "@/models/caseStudy";
import axios from "axios";
import apiRoutes from "../apiRoutes";
import CaseStudyDetails from "@/models/caseStudyDetails";

const baseRoute = apiRoutes.caseStudies;

const getCaseStudy = (slug: string) => {
	return axios.get<CaseStudyDetails>(`${baseRoute}/${slug}`);
};

const getCaseStudies = (filter: string) => {
	return axios.get<CaseStudy>(baseRoute, { params: { filter } });
};

const caseStudiesService = {
	getCaseStudies,
	getCaseStudy,
};

export default caseStudiesService;
