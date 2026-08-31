// components/sections/TrustStrip.tsx
export const TrustStrip = () => {
  const items = ["Scalable Systems", "Modern Technology", "Secure Architecture", "Custom Solutions"];

  return (
    <section className="border-y border-[#0B5CFF]/20 py-6 bg-[#07152E]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap justify-between items-center gap-4 text-sm">
        <span className="font-semibold text-white">Built for businesses that want to move faster.</span>
        <div className="flex flex-wrap gap-6">
          {items.map((item) => (
            <span key={item} className="text-[#0B5CFF] font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};