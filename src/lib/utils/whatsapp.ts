import type { CartItem } from "@/types/business";

export function createWhatsAppOrderLink(
  whatsappNumber: string,
  cart: CartItem[],
): string {
  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  let text = `*NEW STORE ORDER / INQUIRY*\n`;
  text += `==========================\n\n`;

  cart.forEach((item, index) => {
    const itemTotal = item.product.price * item.quantity;
    text += `*${index + 1}. ${item.product.name}*\n`;
    text += `   • Qty: ${item.quantity}\n`;
    text += `   • Unit Price: ${item.product.formattedPrice}\n`;
    text += `   • Subtotal: ₦${itemTotal.toLocaleString()}\n\n`;
  });

  text += `==========================\n`;
  text += `*ESTIMATED TOTAL:* ₦${total.toLocaleString()}\n\n`;
  text += `Hello Prolific Luxe, I would like to check availability and place this order.`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}
