import { ShieldCheck, Sprout, Scale, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Jaminan Keamanan Pangan",
      description: "Dapur kami berstandar HACCP & SLHS, bukan dapur rumahan.",
    },
    {
      icon: Sprout,
      title: "Segar dari Peternakan",
      description: "Protein segar (ayam & telur) dari peternakan keluarga kami sendiri.",
    },
    {
      icon: Scale,
      title: "Makro Presisi",
      description: "Kustomisasi porsi protein & karbohidrat sesuai kebutuhanmu.",
    },
    {
      icon: Users,
      title: "Diawasi Tim Ahli",
      description: "Menu divalidasi oleh tim ahli gizi & food safety in-house.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kenapa NgeMeal?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami tidak sembarangan. Kesehatan dan kepercayaan Anda adalah prioritas utama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-card transition-smooth hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
