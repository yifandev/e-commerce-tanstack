'use client'

import {
  ChevronsUpDown,
  HelpCircle,
  LogOut,
  Settings,
  User,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { useNavigate } from '@tanstack/react-router'
import { NavUserProps } from '@/lib/types'

export function NavUser({ user }: NavUserProps) {
  const { isMobile } = useSidebar()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({
            to: '/',
          })
          toast.success('Keluar akun succesfully')
        },
        onError: ({ error }) => {
          toast.error(error.message)
        },
      },
    })
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={user.image ?? `https://avatar.iran.liara.run/public`}
                  alt={user.name}
                />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={user.image ?? `https://avatar.iran.liara.run/public`}
                    alt={user.name}
                  />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-1.5 px-10">
                <div className="px-1.5 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  ADMIN
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </DropdownMenuLabel>

            <div className="p-1">
              <DropdownMenuItem className="gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-accent transition-colors">
                <User className="size-4 text-muted-foreground" />
                <span>Profile</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-accent transition-colors">
                <Settings className="size-4 text-muted-foreground" />
                <span>Account Settings</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-accent transition-colors">
                <HelpCircle className="size-4 text-muted-foreground" />
                <span>Help & Support</span>
              </DropdownMenuItem>
            </div>

            <DropdownMenuSeparator className="my-1" />

            <div className="p-1">
              <DropdownMenuItem
                onClick={handleSignOut}
                className="gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-destructive/10 hover:text-destructive transition-colors text-red-600"
              >
                <LogOut className="size-4" />
                <span className="font-medium">Log out</span>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
