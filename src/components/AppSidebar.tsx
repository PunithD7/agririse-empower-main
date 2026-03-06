import {
  LayoutDashboard,
  Sprout,
  TrendingUp,
  ShieldAlert,
  MessageCircle,
  ScanEye,
  Wallet,
  FileText,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { titleKey: "nav.dashboard", url: "/", icon: LayoutDashboard },
  { titleKey: "nav.crop", url: "/crop-intelligence", icon: Sprout },
  { titleKey: "nav.market", url: "/market-insights", icon: TrendingUp },
  { titleKey: "nav.risk", url: "/risk-assessment", icon: ShieldAlert },
  { titleKey: "nav.assistant", url: "/ai-assistant", icon: MessageCircle },
  { titleKey: "nav.disease", url: "/disease-detection", icon: ScanEye },
  { titleKey: "nav.finance", url: "/financial-inclusion", icon: Wallet },
  { titleKey: "nav.schemes", url: "/government-schemes", icon: FileText },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        {!collapsed && (
          <div className="px-4 py-5">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌸</span>
              <div>
                <h1 className="font-display text-lg font-bold text-sidebar-foreground">{t("app.title")}</h1>
                <p className="text-xs text-sidebar-foreground/70">{t("app.subtitle")}</p>
              </div>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="flex justify-center py-4">
            <span className="text-2xl">🌸</span>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{t(item.titleKey)}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        {!collapsed && <LanguageSwitcher />}
      </SidebarFooter>
    </Sidebar>
  );
}
