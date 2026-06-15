"use client";

import { useMemo } from "react";
import { ReactFlow, Controls, Background, Edge, Node, Position, MarkerType, Handle } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import dagre from "dagre";
import { Icon, RoadmapNode } from "./RoadmapPageShell";

interface RoadmapGraphViewProps {
  nodes: RoadmapNode[];
  completedIds: Set<string>;
  bookmarkedIds: Set<string>;
  nextNodeId?: string;
  onNodeClick: (nodeId: string) => void;
}

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 280;
const nodeHeight = 80;

const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  dagreGraph.setGraph({ rankdir: "TB", nodesep: 50, ranksep: 80 });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = Position.Top;
    node.sourcePosition = Position.Bottom;
    // Shift coordinates so that the node origin is top-left
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
    return node;
  });

  return { nodes, edges };
};

export default function RoadmapGraphView({ nodes, completedIds, bookmarkedIds, nextNodeId, onNodeClick }: RoadmapGraphViewProps) {
  const { initialNodes, initialEdges } = useMemo(() => {
    const rfNodes: Node[] = nodes.map((n) => {
      const isCompleted = completedIds.has(n.id);
      const isNext = n.id === nextNodeId;
      const isBookmarked = bookmarkedIds.has(n.id);

      return {
        id: n.id,
        data: { label: n.title, stage: n.stage, difficulty: n.difficulty, duration: n.duration, isCompleted, isNext, isBookmarked },
        type: "roadmapNode",
        position: { x: 0, y: 0 },
      };
    });

    const rfEdges: Edge[] = [];
    nodes.forEach((n) => {
      if (n.prerequisites && n.prerequisites.length > 0) {
        n.prerequisites.forEach((prereqLabel) => {
          // Find the node id matching the prerequisite title/label
          const prereqNode = nodes.find((node) => node.title === prereqLabel);
          if (prereqNode) {
            rfEdges.push({
              id: `e-${prereqNode.id}-${n.id}`,
              source: prereqNode.id,
              target: n.id,
              type: "smoothstep",
              animated: true,
              style: { stroke: "#ef4444", strokeWidth: 2, opacity: 0.5 },
              markerEnd: {
                type: MarkerType.ArrowClosed,
                width: 15,
                height: 15,
                color: "#ef4444",
              },
            });
          }
        });
      }
    });

    // If there are no prerequisites defined (i.e. simple linear list), we auto-link them in sequence
    if (rfEdges.length === 0 && nodes.length > 1) {
      for (let i = 0; i < nodes.length - 1; i++) {
        rfEdges.push({
          id: `e-${nodes[i].id}-${nodes[i + 1].id}`,
          source: nodes[i].id,
          target: nodes[i + 1].id,
          type: "smoothstep",
          animated: true,
          style: { stroke: "#ef4444", strokeWidth: 2, opacity: 0.5 },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 15,
            height: 15,
            color: "#ef4444",
          },
        });
      }
    }

    const layouted = getLayoutedElements(rfNodes, rfEdges);
    return { initialNodes: layouted.nodes, initialEdges: layouted.edges };
  }, [nodes, completedIds, nextNodeId, bookmarkedIds]);

  return (
    <div className="h-[700px] w-full rounded-md border border-zinc-800 bg-[#050505]">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        onNodeClick={(_, node) => onNodeClick(node.id)}
        fitView
        minZoom={0.2}
        className="touch-none"
      >
        <Background color="#ef4444" gap={24} size={1} />
        <Controls className="fill-white bg-zinc-900 !border-zinc-800 button:bg-zinc-900 button:border-zinc-800 button:fill-white hover:button:bg-zinc-800" />
      </ReactFlow>
    </div>
  );
}

interface CustomNodeData {
  label: string;
  stage: string;
  difficulty: string;
  duration?: string;
  isCompleted: boolean;
  isNext: boolean;
  isBookmarked: boolean;
}

function CustomNode({ data }: { data: CustomNodeData }) {
  return (
    <div className={`relative w-[280px] rounded-md border p-3 shadow-lg transition-transform hover:scale-[1.02] cursor-pointer ${data.isCompleted ? "border-red-500 bg-red-500/10" : data.isNext ? "border-red-500/50 bg-[#050505] shadow-[0_0_15px_rgba(239,68,68,0.25)]" : "border-zinc-800 bg-[#050505]"}`}>
      <Handle type="target" position={Position.Top} className="!bg-zinc-600 !w-2 !h-2 !border-none" />
      
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-black text-white line-clamp-1">{data.label}</h3>
        {data.isCompleted && <Icon className="h-4 w-4 text-red-500 shrink-0" name="check" />}
        {data.isBookmarked && !data.isCompleted && <Icon className="h-4 w-4 text-emerald-400 shrink-0" name="bookmark" />}
      </div>
      
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <span className="rounded border border-zinc-800 px-1.5 py-0.5 text-[10px] font-bold text-zinc-400">{data.stage}</span>
        <span className="rounded border border-zinc-800 px-1.5 py-0.5 text-[10px] font-bold text-zinc-400">{data.difficulty}</span>
        <span className="flex items-center gap-1 rounded border border-zinc-800 px-1.5 py-0.5 text-[10px] font-bold text-zinc-400">
          <Icon className="h-3 w-3 text-red-400" name="clock" />
          {data.duration}
        </span>
      </div>

      <Handle type="source" position={Position.Bottom} className="!bg-zinc-600 !w-2 !h-2 !border-none" />
    </div>
  );
}

const nodeTypes = {
  roadmapNode: CustomNode,
};
