'use client'

import {
  BarChart3,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingBag,
  Tags,
  Users,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'

import { NavProjects } from './nav-projects'
import { NavUser } from './nav-user'
import { Link, linkOptions } from '@tanstack/react-router'
import { NavPrimaryProps, NavUserProps } from '@/lib/types'

const NavItems: NavPrimaryProps['items'] = linkOptions([
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    to: '/dashboard/home',
    activeOptions: { exact: true },
    badge: 'new',
  },
  {
    title: 'Products',
    icon: Package,
    to: '/dashboard/products',
    activeOptions: { exact: false },
    count: 24,
  },
  {
    title: 'Categories',
    icon: Tags,
    to: '/dashboard/categories',
    activeOptions: { exact: false },
  },
  {
    title: 'Customers',
    icon: Users,
    to: '/dashboard/customers',
    activeOptions: { exact: false },
    count: 156,
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    to: '/dashboard/analytics',
    activeOptions: { exact: false },
  },
  {
    title: 'Settings',
    icon: Settings,
    to: '/dashboard/settings',
    activeOptions: { exact: false },
  },
])

export function AppSidebar({ user }: NavUserProps) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/dashboard" className="flex items-center gap-3">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <ShoppingBag className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="font-medium">Admin Panel</span>
                  <span className="text-sm">Managements Website Data</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects items={NavItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
