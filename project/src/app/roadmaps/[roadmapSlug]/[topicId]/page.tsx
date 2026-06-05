import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicDetailPageShell } from "../../../../components/roadmap/TopicDetailPageShell";
import { getAllRoadmapTopicParams, getRoadmapTopicContext } from "../../../../data/roadmaps";

type TopicDetailRouteProps = {
  params: Promise<{
    roadmapSlug: string;
    topicId: string;
  }>;
};

export function generateStaticParams() {
  return getAllRoadmapTopicParams();
}

export async function generateMetadata({ params }: TopicDetailRouteProps): Promise<Metadata> {
  const { roadmapSlug, topicId } = await params;
  const context = getRoadmapTopicContext(roadmapSlug, topicId);

  if (!context) {
    return {
      title: "Roadmap Topic",
    };
  }

  const title = `${context.topic.title} - ${context.roadmap.title}`;
  const description = `${context.topic.description} Learn prerequisites, resources, exercises, quiz prompts, project work, and next steps.`;
  const url = `/roadmaps/${roadmapSlug}/${topicId}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Demon Tech Roadmap`,
      description,
      type: "article",
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Demon Tech Roadmap`,
      description,
    },
  };
}

export default async function TopicDetailPage({ params }: TopicDetailRouteProps) {
  const { roadmapSlug, topicId } = await params;
  const context = getRoadmapTopicContext(roadmapSlug, topicId);

  if (!context) notFound();

  return <TopicDetailPageShell {...context} />;
}
