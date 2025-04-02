import apiRoutes from "../apiRoutes";
import { CaseStudyDetailsResponse, CaseStudyParams, CaseStudyResponse } from "../models/caseStudies";
import httpClient from "../httpClient";

const getCaseStudy = (slug: string) => {
	return httpClient.get<CaseStudyDetailsResponse[]>(`${apiRoutes.caseStudiesDetails}${slug}`);
};

const getCaseStudies = (params?: CaseStudyParams) => {
	return httpClient.get<CaseStudyResponse[]>(apiRoutes.caseStudiesList, { 
	  params 
	});
  };

const caseStudiesService = {
	getCaseStudies,
	getCaseStudy,
};

export default caseStudiesService;
