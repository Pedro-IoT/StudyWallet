import {
  LuGraduationCap,
  LuBook,
  LuLayers,
  LuUserCheck,
} from 'react-icons/lu';

export const SocialProof = () => {
  const categories = [
    { icon: LuGraduationCap, label: 'Ensino Médio' },
    { icon: LuBook, label: 'Graduação' },
    { icon: LuLayers, label: 'Pós-Graduação' },
    { icon: LuUserCheck, label: 'Autodidatas' },
  ];

  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-500">
          O Ecossistema Definitivo Para
        </p>
        <div className="flex flex-wrap justify-center gap-8 font-medium text-zinc-400 sm:gap-16 sm:text-xl">
          {categories.map((category) => (
            <span
              key={category.label}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <category.icon className="h-5 w-5" />
              {category.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
