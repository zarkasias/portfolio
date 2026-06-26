import { services } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";
import { Layout, Smartphone, Eye, Zap, FileCode, MessageSquare, type LucideIcon } from "lucide-react";

const serviceIcons: Record<string, LucideIcon> = {
  Layout,
  Smartphone,
  Eye,
  Zap,
  FileCode,
  MessageSquare,
};

export default function ServicesPage() {
  return (
    <PageLayout className="pt-20 md:w-[80%]">
      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Services</h1>
      <p className="text-xl mb-8 text-muted-foreground">
        Practical, high-impact improvements for your existing website. We clean up and refine
        what you already have, no full rebuild required.
      </p>

      <div className="grid gap-12 pb-20">
        {services.map((service) => {
          const Icon = serviceIcons[service.icon];
          return (
            <Card key={service.id} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-row items-center gap-6 mb-4">
                  {Icon && (
                    <div className="w-14 h-14 bg-secondary text-primary rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>
                  )}
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                </div>

                <div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </PageLayout>
  );
}
