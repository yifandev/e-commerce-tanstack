'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { NavPrimaryProps } from '@/lib/types'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'

export function NavProjects({ items }: NavPrimaryProps) {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item, index) => {
            return (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton
                  asChild
                  size="sm"
                  className={cn(
                    'group relative transition-all duration-200 hover:bg-sidebar-accent/50',
                    'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
                    'data-[active=true]:shadow-sm data-[active=true]:border-l-4 data-[active=true]:border-l-primary',
                  )}
                >
                  <Link
                    activeProps={{
                      'data-active': true,
                    }}
                    to={item.to}
                    activeOptions={item.activeOptions}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:translate-x-1 transition-transform"
                  >
                    <item.icon className="size-4 text-muted-foreground group-hover:text-foreground group-data-[active=true]:text-primary" />
                    <span className="font-medium text-sm flex-1 group-data-[active=true]:font-semibold">
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
