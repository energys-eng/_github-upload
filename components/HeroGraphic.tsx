export function HeroGraphic() {
  const bars = ["h-20", "h-28", "h-16", "h-32", "h-24", "h-36", "h-20"];

  return (
    <div className="technical-panel relative overflow-hidden rounded-lg border border-white/80 p-5 shadow-soft">
      <div className="absolute inset-0 technical-grid opacity-70" aria-hidden="true" />
      <div className="relative rounded-lg border border-energys-blue/10 bg-white/90 p-4 backdrop-blur">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase text-energys-blue">
              análise energética
            </p>
            <p className="mt-2 text-xl font-semibold text-energys-navy">
              Consumo, demanda e eficiência no mesmo painel.
            </p>
          </div>
          <span className="h-3 w-3 rounded-full bg-energys-yellow shadow-[0_0_0_6px_rgba(253,176,42,0.18)]" />
        </div>

        <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-md border border-slate-200 bg-white p-4">
            <div className="flex h-44 items-end gap-3">
              {bars.map((height, index) => (
                <div
                  key={index}
                  className="flex flex-1 items-end rounded-sm bg-slate-100"
                  aria-hidden="true"
                >
                  <span
                    className={`${height} w-full rounded-sm bg-gradient-to-t from-energys-blue to-energys-yellow`}
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-medium text-slate-500">
              <span>carga</span>
              <span>tarifa</span>
              <span>geração</span>
            </div>
          </div>

          <div className="grid gap-3">
            {["Perfil de consumo", "Demanda contratada", "Oportunidade técnica"].map(
              (item, index) => (
                <div key={item} className="rounded-md border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                    <span className="h-2 w-2 rounded-full bg-energys-yellow" />
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-100">
                    <div
                      className="h-2 rounded-full bg-energys-blue"
                      style={{ width: `${52 + index * 14}%` }}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
