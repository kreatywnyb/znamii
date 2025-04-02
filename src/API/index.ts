import caseStudiesService from "./services/caseStudiesService";
import { emailService } from "./services/contactService";

const API = {
	caseStudies: caseStudiesService,
	contact: emailService,
};

export default API;
