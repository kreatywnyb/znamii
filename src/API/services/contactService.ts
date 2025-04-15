import httpClient from "../httpClient";

export type ContactFormData = {
	services: string[];
	name: string;
	email: string;
	message: string;
	policy: boolean;
};

const send = async (data: ContactFormData) => {
	const formData = new FormData();

	formData.append("your-name", data.name);
	formData.append("your-email", data.email);
	formData.append("your-subject", "Formularz kontaktowy znami.co");
	formData.append("your-message", data.message);
	formData.append("services", data.services.join(", "));
	formData.append("_wpcf7_unit_tag", "wpcf7-f0919266-p1-o1");
	formData.append("_wpcf7_locale", "pl_PL");
	formData.append("_wpcf7", "0919266");
	formData.append("_wpcf7_version", "5.7");

	return await httpClient.post(
		"/contact-form-7/v1/contact-forms/39/feedback",
		formData,
	);
};

const contactService = {
    send
};

export default contactService;
