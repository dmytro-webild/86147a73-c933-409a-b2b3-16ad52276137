import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';
import HeroTiltedCards from '@/components/sections/hero/HeroTiltedCards';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import TestimonialMarqueeOverlayCards from '@/components/sections/testimonial/TestimonialMarqueeOverlayCards';
import { Activity, Clock, Wrench } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroTiltedCards
      tag="Expert Portland Cycleworks"
      title="Precision Tuning for Portland’s Dedicated Daily Riders"
      description="From routine maintenance to custom-engineered gravel builds, we keep your wheels turning with expert craftsmanship. Book your service today."
      primaryButton={{
        text: "Book Your Service",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Learn About Our Builds",
        href: "#builds",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-examining-rim-workshop_23-2147892652.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-workshop-creating-bike_23-2148866680.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-holding-bicycle-gear_1170-2555.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-with-electric-bike_23-2149098690.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/bicycle-toolbox-placed-table-yard_482257-96184.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Crafted by Portland, For Portland"
      descriptions={[
        "At Kestrel Cycleworks, we believe your bike is more than just a set of gears and steel. It's your companion for the morning commute and your ticket to weekend discovery.",
        "Tired of impersonal repair shops? Our independent shop offers a warm, craft-centric approach to every repair. We prioritize transparency, honest communication, and mechanical precision to ensure your bike performs at its peak.",
        "Whether you need a quick tune-up or are dreaming of a bespoke gravel machine, our team brings decades of local expertise to every bolt we tighten.",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesMediaCarousel
      tag="Our Expertise"
      title="Reliable Maintenance & Custom Engineering"
      description="Specialized services tailored to your lifestyle."
      items={[
        {
          title: "Routine Maintenance",
          price: "from $89",
          description: "Keep your daily commuter running like new with our comprehensive tune-up packages.",
          buttonIcon: "Wrench",
          buttonHref: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/man-s-hand-repairing-wheel-bicycle_23-2147892351.jpg",
        },
        {
          title: "Wheel Specialist",
          price: "from $45",
          description: "Expert truing and custom wheel building for all riding styles.",
          buttonIcon: "Disc",
          buttonHref: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/auto-mechanic-checking-car_1303-14039.jpg",
        },
        {
          title: "Bespoke Builds",
          price: "from $2,400",
          description: "Custom engineering for the perfect performance gravel or road machine.",
          buttonIcon: "Bike",
          buttonHref: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/repairman-workshop_1098-15533.jpg?_wi=1",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="builds" data-section="builds">
    <SectionErrorBoundary name="builds">
          <FeaturesImageBento
      tag="Recent Projects"
      title="Custom Builds and Work in Progress"
      description="A look into our workshop craftsmanship."
      items={[
        {
          title: "Steel Road Frame",
          description: "Classic geometry with modern components.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-bicycle-outdoors_23-2148889092.jpg",
        },
        {
          title: "Gravel Performance",
          description: "Engineered for rugged terrain.",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-holding-bicycle-gear_1170-2554.jpg",
        },
        {
          title: "Mechanic's Choice",
          description: "Precision workspace excellence.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-repairing-bicycle_23-2149103840.jpg",
        },
        {
          title: "Shop Operations",
          description: "Dedicated service station.",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-working-workshop_1170-2482.jpg",
        },
        {
          title: "Custom Finish",
          description: "Hand-painted bespoke details.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-bicycle-outdoors_23-2148889158.jpg",
        },
        {
          title: "Precision Drivetrain",
          description: "Tuned to perfection.",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-holding-bicycle-gear_1170-2509.jpg",
        },
        {
          title: "Workshop Front",
          description: "Welcome to our shop.",
          imageSrc: "http://img.b2bpic.net/free-photo/bikes-outlet-arrangement_23-2148932595.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="Our Impact"
      title="Portland's Wheels Kept Turning"
      description="Numbers behind our commitment to riders."
      metrics={[
        {
          icon: Wrench,
          title: "Bikes Serviced",
          value: "1,200+",
        },
        {
          icon: Activity,
          title: "Custom Builds",
          value: "85+",
        },
        {
          icon: Clock,
          title: "Maintenance Hours",
          value: "4,500+",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="reviews" data-section="reviews">
    <SectionErrorBoundary name="reviews">
          <TestimonialMarqueeOverlayCards
      tag="What Riders Say"
      title="Trusted by Local Enthusiasts"
      description="Genuine feedback from our community."
      testimonials={[
        {
          name: "Alex Rivers",
          role: "Daily Commuter",
          company: "Portland Urban",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-adult-cycling-work-city_23-2149488818.jpg",
        },
        {
          name: "Jamie Chen",
          role: "Gravel Enthusiast",
          company: "Cascadia Riders",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-with-bicycle-bench_23-2148928020.jpg",
        },
        {
          name: "Sam Thorne",
          role: "Bike Messenger",
          company: "PDX Couriers",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-darkskinned-curly-woman-shows-peace-sign-outside-active-lady-beige-trench-coat-poses-with-bicycle-outside_197531-29486.jpg",
        },
        {
          name: "Morgan Ellis",
          role: "Weekend Rider",
          company: "Local Cycling Club",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-workshop_23-2149103879.jpg",
        },
        {
          name: "Jordan P.",
          role: "Performance Rider",
          company: "Independent",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-chinese-girl-wearing-bike-helmet-screaming-proud-celebrating-victory-success-very-excited-with-raised-arms_839833-28368.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Common Queries"
      title="Service Guidelines"
      description="Everything you need to know about shop policies."
      categories={[
        {
          name: "General Services",
          items: [
            {
              question: "Do I need an appointment?",
              answer: "Appointments are highly recommended for detailed builds, but we try to accommodate small routine maintenance as walk-ins.",
            },
            {
              question: "How long will a tune-up take?",
              answer: "Standard tune-ups typically have a 48-hour turnaround time, subject to part availability.",
            },
            {
              question: "Do you work on e-bikes?",
              answer: "Yes, we handle standard maintenance on mechanical components for e-bikes, excluding motor/battery electronics.",
            },
          ],
        },
      ]}
      cta={{
        name: "Need help?",
        role: "Shop Mechanic",
        buttonText: "Contact Us",
        buttonHref: "#contact",
        imageSrc: "http://img.b2bpic.net/free-photo/portrait-redhead-female-barista-small-coffee-shop_613910-10448.jpg",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
      <ContactSplitForm
        tag="Book a Service"
        title="Schedule Your Service Appointment"
        description="Select your service details and preferred date to book a spot at our Portland workshop."
        inputs={[
          {
            name: "name",
            type: "text",
            placeholder: "Your Name",
            label: "Name",
            required: true,
          },
          {
            name: "email",
            type: "email",
            placeholder: "your.email@example.com",
            label: "Email",
            required: true,
          },
          {
            name: "bikeType",
            type: "select",
            placeholder: "Select Bike Type",
            label: "Bike Type",
            options: [
              "Urban / Commuter Bike",
              "Gravel / Adventure Bike",
              "Road Bike",
              "Custom Build Project",
              "Other / E-Bike",
            ],
            required: true,
          },
          {
            name: "preferredDate",
            type: "date",
            placeholder: "Select Preferred Date",
            label: "Preferred Date",
            required: true,
          },
        ]}
        textarea={{
          name: "message",
          placeholder: "Tell us about your bike or specific repair/build needs...",
          label: "Message",
          rows: 4,
          required: false,
        }}
        buttonText="Book Service Appointment"
        imageSrc="http://img.b2bpic.net/free-photo/repairman-workshop_1098-15533.jpg?_wi=2"
        textAnimation="fade-blur"
      />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
