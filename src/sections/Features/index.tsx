import {
  AppstoreOutlined,
  CalendarOutlined,
  LineChartOutlined,
  LockOutlined,
  RobotOutlined,
  TeamOutlined
} from "@ant-design/icons";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { Card, Grid, Section, Wrap } from "./styles";

const icons = [RobotOutlined, CalendarOutlined, TeamOutlined, LineChartOutlined, AppstoreOutlined, LockOutlined];
type Feature = { title: string; description: string };

function FeaturesSection(): JSX.Element {
  const { t } = useTranslation();
  const items = t("features.items", { returnObjects: true }) as Feature[];

  return (
    <Section id="features">
      <Wrap>
        <h2>{t("features.title")}</h2>
        <Fade cascade damping={0.12} triggerOnce duration={700}>
          <Grid>
            {items.map((item, idx) => {
              const Icon = icons[idx];
              return (
                <Card key={item.title}>
                  <Icon style={{ fontSize: 24, color: "#6C63FF" }} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Card>
              );
            })}
          </Grid>
        </Fade>
      </Wrap>
    </Section>
  );
}

export default FeaturesSection;
