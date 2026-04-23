import { CheckCircleFilled } from "@ant-design/icons";
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import AppButton from "../../components/Button";
import { Card, Grid, Popular, Section, Wrap } from "./styles";

type Plan = { name: string; price: string; period: string; features: string[]; cta: string; popular?: string };

function PricingSection(): JSX.Element {
  const { t } = useTranslation();
  const plans = t("pricing.plans", { returnObjects: true }) as Plan[];

  return (
    <Section id="pricing">
      <Wrap>
        <h2>{t("pricing.title")}</h2>
        <Zoom cascade damping={0.12} triggerOnce duration={750}>
          <Grid>
            {plans.map((plan) => (
              <Card key={plan.name} $popular={Boolean(plan.popular)}>
                {plan.popular ? <Popular>{plan.popular}</Popular> : null}
                <h3>{plan.name}</h3>
                <h4>
                  {plan.price}
                  <small>{plan.period}</small>
                </h4>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircleFilled style={{ color: "#00D4AA", marginRight: 8 }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <AppButton style={{ width: "100%" }} aria-label={plan.cta}>
                  {plan.cta}
                </AppButton>
              </Card>
            ))}
          </Grid>
        </Zoom>
      </Wrap>
    </Section>
  );
}

export default PricingSection;
