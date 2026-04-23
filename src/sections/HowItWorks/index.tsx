import { Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { Badge, Section, Step, Wrap } from "./styles";

type StepItem = { title: string; description: string; link: string };

const Illustration = ({ secondary }: { secondary?: boolean }): JSX.Element => (
  <svg viewBox="0 0 360 220" width="100%" aria-label="Step illustration">
    <rect x="26" y="24" width="292" height="170" rx="20" fill={secondary ? "#00D4AA" : "#6C63FF"} opacity="0.18" />
    <rect x="72" y="60" width="210" height="100" rx="16" fill="#FFFFFF" />
    <circle cx="112" cy="110" r="18" fill="#6C63FF" opacity="0.8" />
    <path d="M152 96 H246" stroke="#00D4AA" strokeWidth="10" strokeLinecap="round" />
    <path d="M152 122 H220" stroke="#6C63FF" strokeWidth="10" strokeLinecap="round" />
  </svg>
);

function HowItWorksSection(): JSX.Element {
  const { t } = useTranslation();
  const steps = t("howItWorks.steps", { returnObjects: true }) as StepItem[];

  return (
    <Section id="howItWorks">
      <Wrap>
        <h2>{t("howItWorks.title")}</h2>
        {steps.map((step, idx) => (
          <Step key={step.title} $reverse={idx % 2 === 0}>
            <Slide direction={idx % 2 === 0 ? "right" : "left"} triggerOnce duration={800}>
              <Illustration secondary={idx === 1} />
            </Slide>
            <Slide direction={idx % 2 === 0 ? "left" : "right"} triggerOnce duration={800}>
              <div>
                <Badge>{idx + 1}</Badge>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <a href="#contact">{step.link}</a>
              </div>
            </Slide>
          </Step>
        ))}
      </Wrap>
    </Section>
  );
}

export default HowItWorksSection;
