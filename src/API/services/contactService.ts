import httpClient from "../httpClient";
import { ContactFormData } from "../models/contactFormData";

const send = async (data: ContactFormData) => {
    return await httpClient.post("/api/contact", data);
}

export const emailService = {
	send 
};
