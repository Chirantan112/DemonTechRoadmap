import type { RoadmapNode, RoadmapPageShellProps } from "../../components/roadmap/RoadmapPageShell";
import { backendRoadmap } from "./backend";
import { devopsRoadmap } from "./devops";
import { frontendRoadmap } from "./frontend";

export const roadmapRegistry = {
  "backend-developer": backendRoadmap,
  "devops-engineer": devopsRoadmap,
  "frontend-developer": frontendRoadmap,
} satisfies Record<string, RoadmapPageShellProps>;

export type RoadmapSlug = keyof typeof roadmapRegistry;

export type RoadmapTopicContext = {
  currentIndex: number;
  nextNode?: RoadmapNode;
  previousNode?: RoadmapNode;
  roadmap: RoadmapPageShellProps;
  roadmapSlug: RoadmapSlug;
  topic: RoadmapNode;
};

export function getRoadmapBySlug(slug: string) {
  return roadmapRegistry[slug as RoadmapSlug];
}

export function getRoadmapTopicContext(roadmapSlug: string, topicId: string): RoadmapTopicContext | undefined {
  const roadmap = getRoadmapBySlug(roadmapSlug);
  if (!roadmap) return undefined;

  const currentIndex = roadmap.roadmapNodes.findIndex((node) => node.id === topicId);
  if (currentIndex === -1) return undefined;

  return {
    currentIndex,
    nextNode: roadmap.roadmapNodes[currentIndex + 1],
    previousNode: roadmap.roadmapNodes[currentIndex - 1],
    roadmap,
    roadmapSlug: roadmapSlug as RoadmapSlug,
    topic: roadmap.roadmapNodes[currentIndex],
  };
}

export function getAllRoadmapTopicParams() {
  return Object.entries(roadmapRegistry).flatMap(([roadmapSlug, roadmap]) =>
    roadmap.roadmapNodes.map((topic) => ({
      roadmapSlug,
      topicId: topic.id,
    })),
  );
}
