//Butun route larda next-auth mekanizmalarinin calismasini saglar
export { auth as middleware } from "@/auth";

// Isterse tum uygulamaya acilan mekanizmalar bazi yerler icin devre disi birakilabilir
export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
