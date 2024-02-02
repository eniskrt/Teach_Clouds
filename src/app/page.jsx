import Welcome from "@/components/about/welcome";
import Spacer from "@/components/common/spacer";
import FeaturedCourses from "@/components/home/featured-courses";
import MobileApp from "@/components/home/mobile-app";
import Slider from "@/components/home/slider";
import UpcomingEvents from "@/components/home/upcoming-events";
import { config } from "@/helpers/config";

export const metadata = {
	title: config.project.slogan,
};

export default function HomePage() {
	return (
		<>
			<Slider />
			<Spacer/>
			<Welcome/>
			<Spacer/>
			<FeaturedCourses/>
			<Spacer/>
			<UpcomingEvents/>
			<Spacer/>
			<MobileApp/>
		</>
	);
}
