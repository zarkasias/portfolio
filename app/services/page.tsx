import { services } from "@/data";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";

export default function ServicesPage() {
  return (
    <PageLayout className="pt-24 md:w-[60%]">
      <h1 className="text-4xl font-bold tracking-tight text-gray-100 mb-4">Services</h1>
      <p className="text-xl mb-8 text-gray-400">
        Leveraging over 27 years of experience to deliver exceptional web development solutions
      </p>
      
      <div className="grid gap-12 pb-20">
        {services.map((service) => (
          <div key={service.id} className="service-card bg-neutral-800/50 rounded-xl p-8 backdrop-blur-sm">
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
          </div>
           
        ))}
      </div>
      
    </PageLayout>
  );
} 