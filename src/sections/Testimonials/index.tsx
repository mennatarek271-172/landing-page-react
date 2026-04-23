import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { Avatar, Card, Grid, Section, Wrap } from "./styles";

type Testimonial = { quote: string; name: string; role: string };

function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

function TestimonialsSection(): JSX.Element {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true }) as Testimonial[];

  return (
    <Section>
      <Wrap>
        <h2>{t("testimonials.title")}</h2>
        <Fade cascade damping={0.12} triggerOnce duration={700}>
          <Grid>
            {items.map((item) => (
              <Card key={item.name}>
                <p>"{item.quote}"</p>
                <Avatar>{initials(item.name)}</Avatar>
                <h4>{item.name}</h4>
                <small>{item.role}</small>
              </Card>
            ))}
          </Grid>
        </Fade>
      </Wrap>
    </Section>
  );
}

export default TestimonialsSection;
