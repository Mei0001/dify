from typing import Any

from core.workflow.nodes.base_node import BaseNode
from core.workflow.nodes.loop.entities import LoopNodeData, LoopState
from core.workflow.utils.condition.entities import Condition
from enums import NodeType


class LoopNode(BaseNode):
    """
    Loop Node.
    """

    _node_data_cls = LoopNodeData
    _node_type = NodeType.LOOP

    def _run(self) -> LoopState:
        return super()._run()

    @classmethod
    def get_conditions(cls, node_config: dict[str, Any]) -> list[Condition]:
        """
        Get conditions.
        """
        node_id = node_config.get("id")
        if not node_id:
            return []

        # TODO waiting for implementation
        return [
            Condition(
                variable_selector=[node_id, "index"],
                comparison_operator="≤",
                value_type="value_selector",
                value_selector=[],
            )
        ]
