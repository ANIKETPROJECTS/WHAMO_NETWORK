import { memo } from 'react';
import {
  EdgeProps,
  getBezierPath,
  BaseEdge,
} from '@xyflow/react';

export const ConnectionEdge = memo(({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
        </marker>
      </defs>
      <BaseEdge 
        path={edgePath} 
        markerEnd="url(#arrowhead)" 
        style={{
          ...style,
          strokeWidth: 2,
          stroke: "#64748b",
        }} 
      />
    </>
  );
});
