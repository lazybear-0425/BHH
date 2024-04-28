import Image from "next/image";
import { Inter } from "next/font/google";
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Breadcrumb from '@/pages/other_pages/Code_share/breadcrumb';

const Link = ({ href, ...props }: { href: string, [key: string]: any }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenuLink asChild active={isActive}>
      <NextLink href={href} className="NavigationMenuLink" {...props} />
    </NavigationMenuLink>
  );
};


export default function Home() {
  return (
    <nav style={{background: 'black', height:'80px'}}>
        <div style={{ position: 'relative' }}> {/* 使得top、bottom、left、right可以使用 */}
          <h1 style={{ color:'white', fontSize:'30px', marginLeft:'40px', top:'20px', position: 'absolute' }}>
            熊熊快樂小組
          </h1>
        </div>
        <div style={{marginLeft:'240px',position: 'absolute', top:'30px'}}>
          <Breadcrumb />
        </div>
        <div style={{float:'right',marginRight:'50px',marginTop:'20px'}}>
        <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuTrigger>其他分頁</NavigationMenuTrigger>
            <NavigationMenuContent>
                <Link href="/other_pages/code_share">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    程式碼分享      
                  </NavigationMenuLink>
                </Link>
                <Link href="/other_pages/hackmd">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    HackMD筆記總覽      
                  </NavigationMenuLink>
                </Link>
                <Link href="/other_pages/want_to_do">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    代訂事項      
                  </NavigationMenuLink>
                </Link>
            </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuIndicator className="NavigationMenuIndicator" /> {/* 添加CSS屬性用，目前不會 */}
        </NavigationMenuList>
        <NavigationMenuViewport />
        </NavigationMenu>

        </div>
    </nav>
  );
}

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"