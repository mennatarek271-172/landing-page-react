import { FormEvent, useRef, useState } from "react";
import { Alert, Input } from "antd";
import { useTranslation } from "react-i18next";
import AppButton from "../../components/Button";
import { ErrorText, Form, Section, Wrap } from "./styles";

type Errors = { name?: string; email?: string };

function ContactSection(): JSX.Element {
  const { t } = useTranslation();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "ok" | "fail">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = t("contact.validation.nameRequired");
    if (!email) nextErrors.email = t("contact.validation.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = t("contact.validation.emailInvalid");
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    try {
      const endpoint = (import.meta as { env?: Record<string, string> }).env?.REACT_APP_CONTACT_ENDPOINT;
      if (!endpoint) throw new Error("missing-endpoint");
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message })
      });
      if (!response.ok) throw new Error("bad-response");
      setStatus("ok");
      formRef.current?.reset();
    } catch {
      setStatus("fail");
    }
  };

  return (
    <Section id="contact">
      <Wrap>
        <div>
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.subtitle")}</p>
          <p>{t("contact.email")}</p>
          <p>{t("contact.location")}</p>
        </div>
        <Form ref={formRef} onSubmit={(event) => void onSubmit(event)} noValidate aria-label="Contact form">
          <label htmlFor="name">{t("contact.form.name")}</label>
          <Input id="name" name="name" aria-label={t("contact.form.name")} />
          {errors.name ? <ErrorText>{errors.name}</ErrorText> : null}
          <label htmlFor="email">{t("contact.form.email")}</label>
          <Input id="email" name="email" aria-label={t("contact.form.email")} />
          {errors.email ? <ErrorText>{errors.email}</ErrorText> : null}
          <label htmlFor="company">{t("contact.form.company")}</label>
          <Input id="company" name="company" aria-label={t("contact.form.company")} />
          <label htmlFor="message">{t("contact.form.message")}</label>
          <Input.TextArea id="message" name="message" rows={5} aria-label={t("contact.form.message")} />
          <AppButton htmlType="submit" aria-label={t("contact.form.submit")}>
            {t("contact.form.submit")}
          </AppButton>
          {status === "ok" ? <Alert message={t("contact.form.success")} type="success" showIcon /> : null}
          {status === "fail" ? <Alert message={t("contact.form.error")} type="error" showIcon /> : null}
        </Form>
      </Wrap>
    </Section>
  );
}

export default ContactSection;
