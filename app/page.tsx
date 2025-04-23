import Posts from "@/components/general/Posts"; // server component
import LandingClient from "@/components/general/landingclient"; // client-side entry button

export default function Home() {
  return (
    <div className="min-h-screen bg-[#001f3f] py-6 px-4 sm:px-6 lg:px-8">
      <LandingClient />
      <h1 className="text-3xl font-semibold text-white mb-4">What&apos;s New?</h1>
      <Posts />
    </div>
  );
}
