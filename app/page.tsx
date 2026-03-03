import { Book, Briefcase, Landmark } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bright-snow p-6 md:p-12">
      <header className="mb-16 flex w-full max-w-4xl flex-col items-center text-center">
        <div className="relative mb-6 flex items-center justify-center">
          <Image
            src="/aklatang-galera-logo.png"
            alt="Aklatang Galera Digital Portal Logo"
            width={400}
            height={250}
            priority
            className="object-contain"
          />
        </div>

        <p className="mt-4 text-xl font-medium italic text-aklatang-navy/70">
          Ang inyong pintuan sa karunungan at serbisyo.
        </p>
      </header>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        <button className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-royal-blue p-12 text-center text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-royal-blue/50">
          <Book
            size={72}
            strokeWidth={1.5}
            className="mb-6 opacity-90 transition-transform duration-500 group-hover:-rotate-12"
          />
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Aklatan</h2>
          <p className="text-sm font-medium text-blue-100/90 max-w-[200px] leading-relaxed">
            Libreng research, e-books, at online databases.
          </p>
        </button>

        <button className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-mint-leaf p-12 text-center text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-mint-leaf/50">
          <Briefcase
            size={72}
            strokeWidth={1.5}
            className="mb-6 opacity-90 transition-transform duration-500 group-hover:rotate-12"
          />
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Hanapbuhay</h2>
          <p className="text-sm font-medium text-emerald-50/90 max-w-[200px] leading-relaxed">
            Skills training, TESDA, at job opportunities.
          </p>
        </button>

        <button className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-turquoise-surf p-12 text-center text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-turquoise-surf/50">
          <Landmark
            size={72}
            strokeWidth={1.5}
            className="mb-6 opacity-90 transition-transform duration-500 group-hover:scale-110"
          />
          <h2 className="mb-3 text-3xl font-bold tracking-tight">
            Serbisyo-Publiko
          </h2>
          <p className="text-sm font-medium text-cyan-50/90 max-w-[200px] leading-relaxed">
            LGU forms, scholarships, at government info.
          </p>
        </button>
      </div>

      <footer className="mt-20 flex w-full flex-col items-center justify-center gap-4 border-t border-aklatang-navy/10 pt-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-aklatang-navy/40">
          Puerto Galera Public Library Digital Portal
        </p>
      </footer>
    </main>
  );
}
