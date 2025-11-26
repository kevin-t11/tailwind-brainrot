import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Problem } from '@/components/landing/Problem';
import { Solution } from '@/components/landing/Solution';
import { Features } from '@/components/landing/Features';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Testimonials } from '@/components/landing/Testimonials';
import { CTA } from '@/components/landing/CTA';
import { Footer } from '@/components/landing/Footer';
import { AuroraBackground } from '@/components/ui/aurora-background';
import LoginDemoPage from './login-demo/page';
import { Input } from '@/components/ui/input';
import { SaveButton } from '@/components/SaveButton';

export default function Home() {
  return (
    // <AuroraBackground className="selection:bg-primary/20">
    //   <Navbar />
    //   <Hero />
    //   <Problem />
    //   <Solution />
    //   <Features />
    //   <HowItWorks />
    //   <Testimonials />
    //   <CTA />
    //   <Footer />
    // </AuroraBackground>

    <div className="mx-auto max-w-lg space-y-4 pt-40">
      <SaveButton />
    </div>
  );
}
