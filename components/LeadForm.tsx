"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const profiles = ["Residencial", "Comercial", "Industrial", "Rural"];

type LeadFormProps = {
  formLocation: "hero" | "final";
  id?: string;
  title?: string;
  description?: string;
};

type FormStatus =
  | { type: "idle"; message: string }
  | { type: "error"; message: string }
  | { type: "success"; message: string };

type FieldErrors = {
  name?: string;
  phone?: string;
};

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

function formatPhone(value: string) {
  const digits = onlyDigits(value).slice(0, 11);

  if (!digits) {
    return "";
  }

  if (digits.length <= 2) {
    return `(${digits}`;
  }

  const area = digits.slice(0, 2);
  const firstPartLength = digits.length > 10 ? 7 : 6;
  const first = digits.slice(2, firstPartLength);
  const second = digits.slice(firstPartLength);

  return `(${area}) ${first}${second ? `-${second}` : ""}`;
}

export function LeadForm({
  formLocation,
  id,
  title = "Solicite sua análise",
  description = "Preencha os dados e a equipe da Energys entrará em contato."
}: LeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: ""
  });

  const phoneHint = useMemo(() => {
    const digits = onlyDigits(phone);
    return digits.length > 0 && digits.length < 10
      ? "Informe o DDD e o telefone completo."
      : "Formato sugerido: (11) 99999-9999";
  }, [phone]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedName = name.trim();
    const phoneDigits = onlyDigits(phone);
    const nextFieldErrors: FieldErrors = {};

    if (normalizedName.length < 2) {
      nextFieldErrors.name = "Informe seu nome para continuar.";
    }

    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      nextFieldErrors.phone = "Informe um telefone válido com DDD.";
    }

    if (nextFieldErrors.name || nextFieldErrors.phone) {
      setFieldErrors(nextFieldErrors);
      setStatus({
        type: "error",
        message: "Revise os campos destacados para solicitar a análise."
      });
      return;
    }

    setIsSubmitting(true);
    setFieldErrors({});
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: normalizedName,
          phone: phoneDigits,
          phoneFormatted: formatPhone(phone),
          profile: profile || undefined,
          formLocation
        })
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Não foi possível enviar seus dados agora.");
      }

      setName("");
      setPhone("");
      setProfile("");
      setStatus({
        type: "success",
        message:
          data.message ||
          "Recebemos seus dados. Em breve a equipe da Energys entrará em contato."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Não foi possível enviar seus dados agora."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      id={id ?? `lead-form-${formLocation}`}
      onSubmit={handleSubmit}
      className="scroll-mt-28 rounded-lg border border-white/85 bg-white/95 p-5 shadow-premium backdrop-blur sm:p-6"
      noValidate
      aria-busy={isSubmitting}
    >
      <div className="mb-5">
        <p className="text-lg font-bold text-energys-navy">{title}</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      </div>

      <div className="grid gap-4">
        <div>
          <label htmlFor={`name-${formLocation}`} className="text-sm font-semibold text-slate-800">
            Nome
          </label>
          <input
            id={`name-${formLocation}`}
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              if (fieldErrors.name) {
                setFieldErrors((current) => ({ ...current, name: undefined }));
              }
            }}
            placeholder="Seu nome"
            className="mt-2 h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-energys-blue focus:ring-4 focus:ring-energys-cyan/20 aria-[invalid=true]:border-red-400 aria-[invalid=true]:focus:ring-red-200"
            required
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={
              fieldErrors.name ? `name-error-${formLocation}` : undefined
            }
          />
          {fieldErrors.name ? (
            <p id={`name-error-${formLocation}`} className="mt-2 text-xs font-medium text-red-700">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`phone-${formLocation}`} className="text-sm font-semibold text-slate-800">
            Telefone
          </label>
          <input
            id={`phone-${formLocation}`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(event) => {
              setPhone(formatPhone(event.target.value));
              if (fieldErrors.phone) {
                setFieldErrors((current) => ({ ...current, phone: undefined }));
              }
            }}
            placeholder="(11) 99999-9999"
            className="mt-2 h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-energys-blue focus:ring-4 focus:ring-energys-cyan/20 aria-[invalid=true]:border-red-400 aria-[invalid=true]:focus:ring-red-200"
            required
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={`phone-hint-${formLocation}${
              fieldErrors.phone ? ` phone-error-${formLocation}` : ""
            }`}
          />
          <p id={`phone-hint-${formLocation}`} className="mt-2 text-xs text-slate-500">
            {phoneHint}
          </p>
          {fieldErrors.phone ? (
            <p id={`phone-error-${formLocation}`} className="mt-2 text-xs font-medium text-red-700">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={`profile-${formLocation}`}
            className="text-sm font-semibold text-slate-800"
          >
            Perfil opcional
          </label>
          <select
            id={`profile-${formLocation}`}
            name="profile"
            value={profile}
            onChange={(event) => setProfile(event.target.value)}
            className="mt-2 h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-slate-900 outline-none transition focus:border-energys-blue focus:ring-4 focus:ring-energys-cyan/20"
          >
            <option value="">Selecione se quiser</option>
            {profiles.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-energys-deep via-energys-navy to-energys-mid px-5 text-sm font-bold text-white shadow-[0_14px_34px_rgba(28,2,98,0.24)] transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-energys-blue/25 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          )}
          Quero solicitar minha análise
        </button>
      </div>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        Ao enviar, você autoriza a Energys a entrar em contato pelos dados informados.
      </p>
      <ul className="mt-3 grid gap-1 text-xs leading-5 text-slate-500">
        <li>Contato técnico, consultivo e sem pressão comercial.</li>
        <li>Suas informações serão usadas para iniciar uma conversa sobre sua realidade energética.</li>
      </ul>

      {status.message ? (
        <div
          className={`mt-4 flex gap-2 rounded-md px-3 py-3 text-sm ${
            status.type === "success"
              ? "bg-emerald-50 text-emerald-800"
              : "bg-red-50 text-red-700"
          }`}
          role={status.type === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status.type === "success" ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          ) : null}
          <span>{status.message}</span>
        </div>
      ) : null}
    </form>
  );
}
