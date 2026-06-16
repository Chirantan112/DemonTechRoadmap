import HomeHeader from "@/src/components/HomeHeader";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050505] text-zinc-100">
      <HomeHeader />
      <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <h1 className="text-4xl font-black text-white">Privacy Policy</h1>
        <p className="mt-4 text-zinc-400">Last updated: June 2026</p>
        
        <div className="mt-8 space-y-6 text-zinc-300">
          <p>
            At DemonTech Roadmap, we are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy applies to our website and describes how we handle your personal information.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8">Information Collection</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or communicate with us.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8">Use of Information</h2>
          <p>
            We use the information we collect to operate, maintain, and improve our services, as well as to communicate with you about updates and new features.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8">Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through our Discord community.
          </p>
        </div>
      </div>
    </main>
  );
}
