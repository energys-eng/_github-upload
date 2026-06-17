import { NextResponse } from "next/server";

const allowedProfiles = new Set(["Residencial", "Comercial", "Industrial", "Rural"]);
const allowedFormLocations = new Set(["hero", "final"]);

type LeadRequest = {
  name?: unknown;
  phone?: unknown;
  phoneFormatted?: unknown;
  profile?: unknown;
  formLocation?: unknown;
};

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizePhone(value: unknown) {
  return typeof value === "string" ? value.replace(/\D/g, "") : "";
}

export async function POST(request: Request) {
  let body: LeadRequest;

  try {
    body = (await request.json()) as LeadRequest;
  } catch {
    return NextResponse.json({ message: "Dados inválidos." }, { status: 400 });
  }

  const name = normalizeText(body.name);
  const phone = normalizePhone(body.phone);
  const phoneFormatted = normalizeText(body.phoneFormatted);
  const profile = normalizeText(body.profile);
  const formLocation = normalizeText(body.formLocation);

  if (name.length < 2) {
    return NextResponse.json({ message: "Informe um nome válido." }, { status: 400 });
  }

  if (phone.length < 10 || phone.length > 11) {
    return NextResponse.json(
      { message: "Informe um telefone válido com DDD." },
      { status: 400 }
    );
  }

  if (profile && !allowedProfiles.has(profile)) {
    return NextResponse.json({ message: "Perfil informado é inválido." }, { status: 400 });
  }

  if (formLocation && !allowedFormLocations.has(formLocation)) {
    return NextResponse.json({ message: "Origem do formulário é inválida." }, { status: 400 });
  }

  const lead = {
    name,
    phone,
    phoneFormatted: phoneFormatted || phone,
    profile: profile || null,
    formLocation: formLocation || null,
    source: "landing-energys",
    createdAt: new Date().toISOString()
  };

  const webhookUrl = process.env.WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    // Integração futura: configure WEBHOOK_URL para enviar leads a um CRM,
    // WhatsApp, planilha ou webhook. Sem essa variável, nenhum serviço externo é acionado.
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({
        message: "Recebemos seus dados. Em breve a equipe da Energys entrará em contato.",
        debug: {
          mode: "development",
          lead
        }
      });
    }

    return NextResponse.json(
      { message: "Integração de leads não configurada." },
      { status: 503 }
    );
  }

  let validatedWebhookUrl: URL;

  try {
    validatedWebhookUrl = new URL(webhookUrl);
  } catch {
    return NextResponse.json(
      { message: "Integração de leads configurada com URL inválida." },
      { status: 500 }
    );
  }

  if (!["http:", "https:"].includes(validatedWebhookUrl.protocol)) {
    return NextResponse.json(
      { message: "Integração de leads configurada com protocolo inválido." },
      { status: 500 }
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 7000);

  try {
    const response = await fetch(validatedWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(lead),
      signal: controller.signal
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Não foi possível registrar o lead agora." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message: "Recebemos seus dados. Em breve a equipe da Energys entrará em contato."
    });
  } catch {
    return NextResponse.json(
      { message: "Não foi possível registrar o lead agora." },
      { status: 502 }
    );
  } finally {
    clearTimeout(timeout);
  }
}
