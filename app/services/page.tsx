import { services } from "@/data";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";

export default function ServicesPage() {
  return (
    <PageLayout className="pt-20 md:w-[80%]">
      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Services</h1>
      <p className="text-xl mb-8 text-muted-foreground">
        Leveraging over 27 years of experience to deliver exceptional web development solutions
      </p>
      
      <div className="grid gap-12 pb-20">
        {services.map((service) => (
            <Card key={service.id} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
            <div className="flex flex-row items-center gap-6 mb-4">
              {service.icon && (
                <div className="w-16 h-16 relative">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
               <h2 className="text-2xl font-semibold">{service.title}</h2>
              </div>
             
              <div>
                
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div className="grid md:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              </CardContent>
              </Card>
           
        ))}
      </div>
      
    </PageLayout>
  );
} 