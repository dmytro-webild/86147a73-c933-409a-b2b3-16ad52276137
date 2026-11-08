import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Builds",
    "href": "#builds"
  },
  {
    "name": "Reviews",
    "href": "#reviews"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="magnetic" siteBackground="gridDots" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="Kestrel Cycleworks"
      ctaButton={{
        text: "Book Service",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      imageSrc="http://img.b2bpic.net/free-photo/mechanic-examining-bicycle-wheel_1170-2426.jpg"
      brand="Kestrel Cycleworks"
      columns={[
        {
          title: "Location",
          items: [
            {
              label: "Portland, OR",
            },
            {
              label: "Open Daily 9am - 6pm",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Instagram",
            },
            {
              label: "Twitter",
            },
            {
              label: "Email Us",
            },
          ],
        },
      ]}
      copyright="© 2024 Kestrel Cycleworks. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
