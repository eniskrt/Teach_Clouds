import React from "react";
import events from "@/helpers/data/events.json";
import EventCard from "./event-card";

const Events = () => {
	return (
		<div className="container ">
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
				{events.map((item) => (
					<div className="col" key={item.id}>
						<EventCard {...item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Events;
