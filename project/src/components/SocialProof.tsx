import { getRepoDetails } from "@/src/lib/github";

export default async function SocialProof() {
  const repo = await getRepoDetails();
  
  const stars = repo ? repo.stargazers_count.toLocaleString() : "500+";

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <div className="border-l border-zinc-800 pl-4">
        <p className="text-2xl font-black text-white">8</p>
        <p className="mt-1 text-sm leading-5 text-zinc-400">roadmaps across core tech tracks</p>
      </div>
      <div className="border-l border-zinc-800 pl-4">
        <p className="text-2xl font-black text-white">150+</p>
        <p className="mt-1 text-sm leading-5 text-zinc-400">curated topics, projects, and resources</p>
      </div>
      <div className="border-l border-zinc-800 pl-4">
        <p className="text-2xl font-black text-white">100%</p>
        <p className="mt-1 text-sm leading-5 text-zinc-400">Open source and free forever</p>
      </div>
    </div>
  );
}
