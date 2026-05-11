import { LuGraduationCap, LuBook, LuLayers, LuUserCheck } from 'react-icons/lu';

export const SocialProof = () => {
  const categories = [
    { icon: LuGraduationCap, label: 'Ensino Médio' },
    { icon: LuBook, label: 'Graduação' },
    { icon: LuLayers, label: 'Pós-Graduação' },
    { icon: LuUserCheck, label: 'Autodidatas' },
  ];

  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <p className="mb-8 text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">
          O Ecossistema Definitivo Para
        </p>
        <div className="flex flex-wrap justify-center gap-10 font-medium text-zinc-400 sm:gap-20 sm:text-2xl">
          {categories.map(category => (
            <span
              key={category.label}
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <category.icon className="h-6 w-6" />
              {category.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
