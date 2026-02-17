
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export const Hero = () => {
  const router = useRouter();
  
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

      {/* Content */}
      <div className="absolute inset-0 -z-10 opacity-30">
           <Image src={heroBg} alt="Abstract Background" fill className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
      
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/50 text-accent-foreground text-sm font-medium mb-6 border border-accent">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Accepting New Audits for Q1
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
              Improve your existing frontend. <br className="hidden md:block" />
              <span className="text-primary/80">Without the rewrite.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              I help businesses clean up, stabilize, and refine their existing front-end codebases. 
              Clearer, faster, and more maintainable — no full redesign required.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base h-12 px-8 shadow-lg hover:shadow-xl transition-all" onClick={() => router.push('/audit')}>
                Request a Front-End Audit
              </Button>
              <Button variant="outline" size="lg" className="text-base h-12 px-8 bg-background/50 backdrop-blur-sm hover:bg-background" onClick={() => router.push("/services")}>
                View Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
    </div>
  );
};
