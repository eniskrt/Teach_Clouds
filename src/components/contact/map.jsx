import { config } from "@/helpers/config";
import React from "react";

const Map = () => {
	return (
		<iframe
			src={config.contact.mapEmbedURL}
			width="100%"
			height="550"
			style={{ border: "0" }}
			allowFullScreen=""
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		></iframe>
	);
};

export default Map;
