import { notFound } from "next/navigation";
import { docsConfig } from "../../../config/docsConfig";
import { DocsLayout } from "../../../components/docs/DocsLayout";
import { Breadcrumbs } from "../../../components/docs/Breadcrumbs";
import { Pager } from "../../../components/docs/Pager";

export async function generateStaticParams() {
  return docsConfig.sidebar.flatMap(group => 
    group.items
      .filter(item => item.href.startsWith('/docs/') && !['/docs/all-roadmaps', '/docs/resources', '/docs/by-category'].includes(item.href))
      .map(item => ({ slug: item.href.replace('/docs/', '') }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { metadata } = await import(`../../../../content/docs/${slug}.mdx`);
    return metadata || { title: slug };
  } catch (e) {
    return { title: "Documentation" };
  }
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  try {
    const MdxContent = (await import(`../../../../content/docs/${slug}.mdx`)).default;
    return (
      <DocsLayout>
        <Breadcrumbs />
        <div className="prose prose-invert prose-red max-w-none">
          <MdxContent />
        </div>
        <Pager />
      </DocsLayout>
    );
  } catch (e) {
    notFound();
  }
}
