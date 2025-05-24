"use client"
import LeftSidebar from "@/components/LeftSidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function DashboardLayout({ children }) {
  return (
    <div className='h-screen w-full '>
    <ResizablePanelGroup direction="horizontal" className={"h-full"}>
      <ResizablePanel defaultSize={13}  maxSize={30}>
       {/* //this is left Sidebar */}
       <LeftSidebar />
      </ResizablePanel>
      <ResizableHandle  className={"border-2 border-black"}/>

      <ResizablePanel defaultSize={50} minSize={40}>
        {/* i called this gray  */}
        {children}
      </ResizablePanel>
      <ResizableHandle  className={"border-2 border-black"} />

      <ResizablePanel defaultSize={10} minSize={10} maxSize={20}>
        <div  className='flex h-full bg-black'></div>
        
      </ResizablePanel>

    </ResizablePanelGroup>
  </div>
  )
}
