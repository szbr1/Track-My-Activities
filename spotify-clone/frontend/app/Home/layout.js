"use client"
import LeftSidebar from "@/components/Sidebars/LeftSidebar";
import RightSideBar from "@/components/Sidebars/RightSideBar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import AuthProvider from "@/components/AuthProvider";


export default function DashboardLayout({ children }) {
  return (
    <AuthProvider>

    <div className='h-screen w-full p-1 bg-black '>
    <ResizablePanelGroup direction="horizontal" className={"h-full"}>
      <ResizablePanel  className="p-1" defaultSize={13}  maxSize={20}>
       {/* //this is left Sidebar */}
       <LeftSidebar />
      </ResizablePanel>
      <ResizableHandle  className={"border-2 border-black"}/>

      <ResizablePanel className="rounded-md h-full overflow-hidden p-1" defaultSize={50} minSize={40}>
        {/* i called this gray  */}
        {children}
      </ResizablePanel>
      <ResizableHandle  className={"border-2 hidden md:block bg-black border-black  "} />

      <ResizablePanel className={'hidden md:block rounded-md h-full  p-1 '}defaultSize={13}  maxSize={20}>
        <RightSideBar />
      </ResizablePanel>

    </ResizablePanelGroup>
  </div>
    </AuthProvider>
  )
}
