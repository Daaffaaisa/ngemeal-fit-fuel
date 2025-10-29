import { ShieldCheck, Leaf, Users } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section id="jaminan-section" className="py-16 md:py-24 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Keamanan & Kualitas Adalah DNA Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami serius soal apa yang Anda makan. <strong className="text-foreground">Kami bukan katering rumahan.</strong>
          </p>
        </div>

        {/* HACCP & SLHS Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="h-10 w-10 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Sertifikasi Keamanan Pangan
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-secondary/50 p-6 rounded-xl">
                <img 
                  src="https://placehold.co/400x300/E2E8F0/333?text=HACCP+Certificate" 
                  alt="Sertifikat HACCP"
                  className="w-full rounded-lg mb-4"
                />
                <h4 className="font-semibold text-foreground mb-2">HACCP Certified</h4>
                <p className="text-sm text-muted-foreground">
                  Hazard Analysis Critical Control Point - Standar internasional untuk keamanan pangan.
                </p>
              </div>
              
              <div className="bg-secondary/50 p-6 rounded-xl">
                <img 
                  src="https://placehold.co/400x300/E2E8F0/333?text=SLHS+Certificate" 
                  alt="Sertifikat SLHS"
                  className="w-full rounded-lg mb-4"
                />
                <h4 className="font-semibold text-foreground mb-2">SLHS Certified</h4>
                <p className="text-sm text-muted-foreground">
                  Sertifikat Laik Higiene Sanitasi - Jaminan kebersihan dan sanitasi dapur.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <img 
                src="https://placehold.co/600x400/E2E8F0/333?text=Dapur+Standar+Industri" 
                alt="Dapur Standar Industri"
                className="w-full rounded-xl"
              />
              <img 
                src="https://placehold.co/600x400/E2E8F0/333?text=Staf+Profesional" 
                alt="Staf Profesional"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Farm-to-Table Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="h-10 w-10 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Dari Peternakan Kami ke Meja Anda
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6 text-lg">
              Protein segar (ayam & telur) berasal langsung dari peternakan keluarga kami sendiri. 
              Kami tahu persis apa yang diberikan kepada hewan ternak kami, sehingga Anda juga tahu 
              persis apa yang Anda konsumsi.
            </p>
            
            <img 
              src="https://placehold.co/1200x500/E2E8F0/333?text=Peternakan+Ayam+NgeMeal" 
              alt="Peternakan Ayam"
              className="w-full rounded-xl"
            />
          </div>
        </div>

        {/* Expert Team Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-10 w-10 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Diawasi Langsung oleh Tim Ahli
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-8 text-lg">
              Setiap menu dirancang dan divalidasi oleh tim ahli gizi profesional dan supervisor 
              food safety bersertifikat. Kesehatan Anda adalah prioritas kami.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start bg-secondary/50 p-6 rounded-xl">
                <img 
                  src="https://placehold.co/150x150/28A745/FFFFFF?text=Ahli+Gizi" 
                  alt="Ahli Gizi"
                  className="w-24 h-24 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Dr. Sarah Nutrition, S.Gz</h4>
                  <p className="text-sm text-primary font-semibold mb-2">Ahli Gizi</p>
                  <p className="text-sm text-muted-foreground">
                    Spesialis nutrisi olahraga dengan 10+ tahun pengalaman.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start bg-secondary/50 p-6 rounded-xl">
                <img 
                  src="https://placehold.co/150x150/28A745/FFFFFF?text=Food+Safety" 
                  alt="Food Safety Supervisor"
                  className="w-24 h-24 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Ahmad Foodsafe, S.TP</h4>
                  <p className="text-sm text-primary font-semibold mb-2">Food Safety Supervisor</p>
                  <p className="text-sm text-muted-foreground">
                    Bersertifikat HACCP & SLHS, memastikan standar keamanan tertinggi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
