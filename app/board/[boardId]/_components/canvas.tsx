"use client";

import { useState } from "react";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";
import {
  useHistory,
  useCanRedo,
  useCanUndo,
  useMutation,
} from "@/liveblocks.config";
import { CanvasMode, CanvasState } from "@/types/canvas";
import { CursorsPresence } from "@/app/(dashboard)/_components/cursors-presence";

interface CanvasProps {
  boardId: string;
}
export const Canvas = ({ boardId }: CanvasProps) => {
  const [convasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();

      const current = { x: 0, y: 0 };

      setMyPresence({
        cursor: current,
      });
    },
    []
  );

  return (
    <main className="w-full h-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={convasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        redo={history.redo}
        undo={history.undo}
      />
      <svg className="h-[100vh] w-[100vw]">
        <g>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  );
};
