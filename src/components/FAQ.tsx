import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Apa itu HACCP & SLHS? Kenapa ini penting?",
      answer: "HACCP (Hazard Analysis Critical Control Point) adalah standar internasional untuk keamanan pangan yang mengidentifikasi, mengevaluasi, dan mengendalikan bahaya yang signifikan terhadap keamanan pangan. SLHS (Sertifikat Laik Higiene Sanitasi) adalah sertifikat dari pemerintah yang menjamin kebersihan dan sanitasi dapur memenuhi standar kesehatan. Ini penting karena memastikan makanan yang Anda konsumsi aman, bersih, dan bebas dari kontaminasi - bukan sekadar masakan rumahan.",
    },
    {
      question: "Apa bedanya Bulking, Cutting, dan Maintenance?",
      answer: "BULKING dirancang dengan surplus kalori dan protein tinggi untuk membangun massa otot. CUTTING memiliki defisit kalori namun tetap tinggi protein untuk membakar lemak sambil mempertahankan otot. MAINTENANCE memberikan kalori seimbang untuk menjaga berat badan dan komposisi tubuh yang sudah ideal. Semua paket dapat dikustomisasi makronya sesuai kebutuhan personal Anda.",
    },
    {
      question: "Bagaimana cara kerja fitur kustomisasi makro \"Personal-Fit\"?",
      answer: "Anda dapat memilih menu favorit, lalu meng-kustomisasi porsi protein (100g-250g) dan karbohidrat (50g-150g) sesuai target makro harian Anda. Sistem kami akan menghitung ulang total kalori, makro nutrisi, dan harga secara real-time. Jadi satu menu bisa disesuaikan untuk berbagai tujuan fitness - dari cutting hingga bulking.",
    },
    {
      question: "Area pengiriman ke mana saja?",
      answer: "Saat ini kami melayani pengiriman untuk wilayah Jakarta, Bogor, Depok, Tangerang, dan Bekasi (Jabodetabek). Kami sedang merencanakan ekspansi ke kota-kota besar lainnya. Untuk info lebih lanjut tentang area pengiriman spesifik Anda, silakan hubungi customer service kami.",
    },
    {
      question: "Apakah bahan-bahan yang digunakan halal?",
      answer: "Ya, 100% semua bahan yang kami gunakan adalah halal. Kami memiliki sertifikasi halal dan protein utama kami (ayam & telur) berasal dari peternakan keluarga sendiri yang terjamin kehalalannya. Kami memahami pentingnya aspek halal dalam konsumsi makanan sehari-hari.",
    },
    {
      question: "Berapa lama makanan bisa bertahan?",
      answer: "Makanan kami fresh dan tidak menggunakan pengawet buatan. Dalam kulkas (suhu 4°C), makanan dapat bertahan 2-3 hari. Kami merekomendasikan untuk mengonsumsi dalam 48 jam setelah diterima untuk kualitas dan kesegaran optimal. Jika Anda ingin menyimpan lebih lama, Anda bisa membekukannya di freezer.",
    },
  ];

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-lg text-muted-foreground">
              Temukan jawaban untuk pertanyaan umum seputar NgeMeal
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg mb-4 px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
