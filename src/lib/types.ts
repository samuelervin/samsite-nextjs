import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export interface SidebarItems {
  links: Array<{
    id: string;
    label: string;
    href: string;
    icon?: LucideIcon;
  }>;
  extras?: ReactNode;
}
export interface post{
  title: string,
  prep_time: string,
  cook_time : string,
  bio: string,
  slug: string,
}
export const defaultPost : post = {
  title: "No New Posts",
  prep_time: "0 Minutes",
  cook_time: "0 Minutes",
  bio: "",
  slug:""
}
