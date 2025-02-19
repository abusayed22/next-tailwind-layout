'use client'
import React from "react"
import AppSidebar_1 from "./AppSidebar_1";
import Backdrop from "./Backdrop";
import AppHeader_1 from "./AppHeader_1";
import { useSidebar } from "@/context/SidebarContext";

const Layout_1 = (props) => {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();

    const mainContentMargin = isMobileOpen
        ? "ml-0"
        : isExpanded || isHovered
            ? "lg:ml-[290px]"
            : "lg:ml-[90px]";

    return (
        <div>
            <div className="min-h-screen xl:flex">
                {/* Sidebar and Backdrop */}
                <AppSidebar_1 />
                <Backdrop />
                {/* Main Content Area */}
                <div
                    className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
                >
                    {/* Header */}
                    <AppHeader_1 />
                    {/* Page Content */}
                    <div className="p-4 mx-auto max-w-screen-2xl md:p-6">{props.children}</div>
                </div>
            </div>
        </div>
    )
};

export default Layout_1;
