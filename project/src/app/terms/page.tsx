import HomeHeader from "@/src/components/HomeHeader";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsOfService() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050505] text-zinc-100">
      <HomeHeader />
      <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <h1 className="text-4xl font-black text-white">Terms of Service</h1>
        <p className="mt-4 text-zinc-400">Last updated: June 2026</p>
        
        <div className="mt-8 space-y-6 text-zinc-300">
          <p>
            Please read these Terms of Service completely using DemonTech Roadmap. This Agreement documents the legally binding terms and conditions attached to the use of the Site.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8">Acceptance of Terms</h2>
          <p>
            By using or accessing the Site in any way, viewing or browsing the Site, you are agreeing to be bound by these Terms of Service.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8">Intellectual Property</h2>
          <p>
            The Site and all of its original content are the sole property of DemonTech and are, as such, fully protected by the appropriate international copyright and other intellectual property rights laws.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8">Termination</h2>
          <p>
            DemonTech reserves the right to terminate your access to the Site, without any advance notice.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8">Links to Other Websites</h2>
          <p>
            Our Site does contain a number of links to other websites and online resources that are not owned or controlled by DemonTech.
          </p>
        </div>
      </div>
    </main>
  );
}
