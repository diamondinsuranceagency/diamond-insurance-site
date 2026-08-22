"use server";

import { Resend } from "resend";

export type ContactFormState = {
  success: boolean;
  message: string;
};

function getRequiredText(
  formData: FormData,
  field: string,
  maxLength: number,
) {
  const value = formData.get(field);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const firstName = getRequiredText(formData, "firstName", 80);
  const lastName = getRequiredText(formData, "lastName", 80);
  const email = getRequiredText(formData, "email", 160);
  const phone = getRequiredText(formData, "phone", 40);
  const topic = getRequiredText(formData, "topic", 100);
  const message = getRequiredText(formData, "message", 3000);

  // Honeypot field. Real visitors should leave this empty.
  const website = getRequiredText(formData, "website", 200);

  if (website) {
    return {
      success: true,
      message: "Thank you. Your message has been received.",
    };
  }

  if (!firstName || !lastName || !email || !message) {
    return {
      success: false,
      message: "Please complete all required fields.",
    };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error("Contact email environment variables are missing.");

    return {
      success: false,
      message:
        "The contact form is temporarily unavailable. Please schedule a consultation instead.",
    };
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `Diamond Insurance Website <${fromEmail}>`,
      to: ["williams78245@gmail.com"],
      replyTo: email,
      subject: `New website inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <h1 style="margin-bottom: 24px;">New Website Inquiry</h1>

          <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          <p><strong>Topic:</strong> ${escapeHtml(topic || "General question")}</p>

          <hr style="margin: 24px 0; border: 0; border-top: 1px solid #e2e8f0;" />

          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
      text: `
New Website Inquiry

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Topic: ${topic || "General question"}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return {
        success: false,
        message:
          "Your message could not be sent. Please try again or schedule a consultation.",
      };
    }

    return {
      success: true,
      message:
        "Thank you. Your message has been sent, and we will follow up shortly.",
    };
  } catch (error) {
    console.error("Contact form error:", error);

    return {
      success: false,
      message:
        "Your message could not be sent. Please try again or schedule a consultation.",
    };
  }
}