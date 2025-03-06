import { NavMain } from "@/components/nav-main";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { GalleryVerticalEnd, SquareTerminal } from "lucide-react";
import * as React from "react";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Über uns",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Was wir machen",
          url: "/",
          external: false,
        },
        {
          title: "Was wir wollen",
          url: "/about",
          external: false,
        },
        {
          title: "Wie du uns erreichst",
          url: "/contact",
          external: false,
        },
      ],
    },
    {
      title: "Gestzliches",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Impressum",
          url: "https://computer-extra.de/Impressum",
          external: true,
        },
        {
          title: "Datenschutz",
          url: "https://computer-extra.de/Datenschutz",
          external: true,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Ihre Firma</span>
            <span className="truncate text-xs">Enterprise</span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
