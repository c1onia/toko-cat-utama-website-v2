export function normalizeWhatsAppNumber(value?: string) {
  if (!value) {
    return undefined;
  }

  const digits = value.replace(/\D/g, "");

  if (!digits) {
    return undefined;
  }

  if (digits.startsWith("62")) {
    return digits;
  }

  if (digits.startsWith("0")) {
    return `62${digits.slice(1)}`;
  }

  return digits;
}

export function whatsappHref(value?: string) {
  const number = normalizeWhatsAppNumber(value);

  return number ? `https://wa.me/${number}` : undefined;
}
