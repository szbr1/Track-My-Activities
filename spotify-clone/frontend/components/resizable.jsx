"use client";

import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function ResizeAble() {
  const [size, setSize] = useState(50); // Default size (percentage)

  return (
    <div className="h-[300px] w-full rounded-lg border p-4">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={30} minSize={10}   >
          <div className="flex h-full items-center justify-center bg-gray-100 p-6 dark:bg-gray-800">
            <span className="font-semibold">Left Panel ({size}%)</span>
          </div>
        </ResizablePanel>
        <ResizableHandle className={'border-2 border-black'} />
        <ResizablePanel defaultSize={100 - size}>
          <div className="flex h-full items-center justify-center bg-gray-200 p-6 dark:bg-gray-700">
            <span className="font-semibold">Right Panel ({100 - size}%)</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}