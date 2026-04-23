import { CaretRightFilled } from "@ant-design/icons";
import { Fade, Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import AppButton from "../../components/Button";
import { Blobs, Grid, Section } from "./styles";

function HeroSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Section>
      <Blobs />
      <Grid>
        <div>
          <Fade direction="up" triggerOnce duration={700}>
            <h1>{t("hero.title")}</h1>
            <p>{t("hero.subtitle")}</p>
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
              <AppButton aria-label={t("hero.primaryCta")}>{t("hero.primaryCta")}</AppButton>
              <AppButton variant="outline" icon={<CaretRightFilled />} aria-label={t("hero.secondaryCta")}>
                {t("hero.secondaryCta")}
              </AppButton>
            </div>
          </Fade>
        </div>
        <Slide direction="right" triggerOnce duration={800}>
          <svg viewBox="0 0 420 320" width="100%" aria-label="Hero illustration">
            <rect x="40" y="40" width="290" height="220" rx="28" fill="#6C63FF" opacity="0.12" />
            <circle cx="312" cy="84" r="54" fill="#00D4AA" opacity="0.35" />
            <polygon points="148,54 292,112 236,252 94,192" fill="#6C63FF" opacity="0.82" />
            <rect x="118" y="110" width="160" height="92" rx="18" fill="#FFFFFF" />
            <path d="M138 157 H236" stroke="#6C63FF" strokeWidth="10" strokeLinecap="round" />
            <path d="M138 182 H208" stroke="#00D4AA" strokeWidth="10" strokeLinecap="round" />
          </svg>
        </Slide>
      </Grid>
    </Section>
  );
}

export default HeroSection;
