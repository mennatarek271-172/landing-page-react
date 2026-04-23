import { Fade, Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { Card, Grid, Section, StatGrid } from "./styles";

type StatItem = { value: string; label: string };

function AboutStatsSection(): JSX.Element {
  const { t } = useTranslation();
  const stats = t("about.stats", { returnObjects: true }) as StatItem[];

  return (
    <Section id="about">
      <Grid>
        <Slide direction="left" triggerOnce duration={700}>
          <div>
            <h2>{t("about.title")}</h2>
            <p>{t("about.description")}</p>
          </div>
        </Slide>
        <Fade triggerOnce duration={800}>
          <StatGrid>
            {stats.map((stat) => (
              <Card key={stat.label}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </Card>
            ))}
          </StatGrid>
        </Fade>
      </Grid>
    </Section>
  );
}

export default AboutStatsSection;
