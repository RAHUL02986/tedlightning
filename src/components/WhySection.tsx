import heroBackground from "../../public/assets/hero-project.jpg";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export function WhySection() {
  return <section id="why" className="section-padding">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <Image src={heroBackground} alt="Solar lighting installation" className="w-full h-full object-cover" width={600} height={750} />
          </div>

          {/* Content */}
          <div>
            <span className="section-label">Why TedLighting</span>
            <h2 className="heading-lg mb-8">
              Designed for<br />
              real-world reliability
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">Most lighting failures don't happen in the first month—they happen after installation. Our systems are engineered with post-installation 

Tedlighting focuses on system-level reliability, not headline numbers. </p>

            <div className="space-y-6 mb-12">
              {["Panel, battery, and load designed as one system", "Verified battery chemistry and cycle life", "Climate-adapted configurations", "Full component traceability"].map(point => <div key={point} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  <span className="text-foreground font-light">{point}</span>
                </div>)}
            </div>

            <Link href="/about" className="link-explore text-foreground group">
              <span>Learn more about us</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>;
}