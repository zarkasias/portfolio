"use server";

import { Resend } from "resend";

const RECIPIENT = "david@chambers-consulting.dev";
const SENDER = "Website Inquiry <info@chambers-consulting.dev>";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactField = "name" | "email" | "website" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
  values?: Record<ContactField, string>;
};

const field = (formData: FormData, name: string) => {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
};

export async function sendContactMessage(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Hidden from people, so a filled value means a bot. Report success so the
  // bot has no reason to retry.
  if (field(formData, "leave_blank")) {
    return { status: "success" };
  }

  const values = {
    name: field(formData, "name"),
    email: field(formData, "email"),
    website: field(formData, "website"),
    message: field(formData, "message"),
  };

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (!values.name || values.name.length > 100) {
    fieldErrors.name = "Please enter your name.";
  }
  if (!EMAIL_PATTERN.test(values.email) || values.email.length > 254) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (values.website.length > 200) {
    fieldErrors.website = "Please shorten this address.";
  }
  if (!values.message) {
    fieldErrors.message = "Please tell me a little about your site.";
  } else if (values.message.length > 5000) {
    fieldErrors.message = "Please keep your message under 5,000 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
      values,
    };
  }

  const failure: ContactState = {
    status: "error",
    message: `Your message couldn't be sent. Please email me at ${RECIPIENT}.`,
    values,
  };

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: SENDER,
      to: [RECIPIENT],
      replyTo: values.email,
      subject: "New website inquiry",
      text: [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Website: ${values.website || "Not provided"}`,
        "",
        values.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Contact email rejected:", error.name, error.message);
      return failure;
    }
  } catch (error) {
    console.error(
      "Contact email failed:",
      error instanceof Error ? error.name : "Unknown error",
    );
    return failure;
  }

  return { status: "success" };
}

export type CheckupField = "email" | "website";

export type CheckupState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<CheckupField, string>>;
  values?: Record<CheckupField, string>;
};

export async function requestCheckup(
  _previous: CheckupState,
  formData: FormData,
): Promise<CheckupState> {
  if (field(formData, "leave_blank")) {
    return { status: "success" };
  }

  const values = {
    email: field(formData, "email"),
    website: field(formData, "website"),
  };

  const fieldErrors: CheckupState["fieldErrors"] = {};
  if (!values.website || values.website.length > 200) {
    fieldErrors.website = "Please enter your website address.";
  }
  if (!EMAIL_PATTERN.test(values.email) || values.email.length > 254) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
      values,
    };
  }

  const failure: CheckupState = {
    status: "error",
    message: `Your request couldn't be sent. Please email me at ${RECIPIENT}.`,
    values,
  };

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: SENDER,
      to: [RECIPIENT],
      replyTo: values.email,
      subject: "Free site checkup request",
      text: [`Website: ${values.website}`, `Email: ${values.email}`].join(
        "\n",
      ),
    });

    if (error) {
      console.error("Checkup email rejected:", error.name, error.message);
      return failure;
    }
  } catch (error) {
    console.error(
      "Checkup email failed:",
      error instanceof Error ? error.name : "Unknown error",
    );
    return failure;
  }

  return { status: "success" };
}
