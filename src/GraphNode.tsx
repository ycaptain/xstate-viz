import { StateNodeViz } from './StateNodeViz';
import { StateElkNode } from './Graph';

export const GraphNode: React.FC<{ elkNode: StateElkNode }> = ({ elkNode }) => {
  return <StateNodeViz stateNode={elkNode.node.data} node={elkNode.node} />;
};
