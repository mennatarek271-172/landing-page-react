import { useEffect, useMemo, useState } from "react";
import { Drawer, Segmented } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import AppButton from "../Button";
import {
  Actions,
  Brand,
  BrandIcon,
  DrawerActions,
  HeaderInner,
  HeaderWrap,
  MobileToggle,
  Nav,
  NavLink
} from "./styles";

const ids = ["about", "features", "howItWorks", "pricing", "contact"] as const;

function Header(): JSX.Element {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = useMemo(
    () => ids.map((id) => ({ id, label: t(`nav.${id}`) })),
    [t]
  );

  const scrollTo = (id: string): void => {
    const node = document.getElementById(id);
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <HeaderWrap $scrolled={scrolled}>
      <HeaderInner>
        <Brand aria-label="Nexora home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <BrandIcon />
          {t("brand.name")}
        </Brand>
        <Nav aria-label="Main navigation">
          {nav.map((item) => (
            <NavLink key={item.id} aria-label={item.label} onClick={() => scrollTo(item.id)}>
              {item.label}
            </NavLink>
          ))}
        </Nav>
        <Actions>
          <Segmented
            size="small"
            value={i18n.language}
            options={[
              { label: "EN", value: "en" },
              { label: "AR", value: "ar" }
            ]}
            onChange={(value) => void i18n.changeLanguage(String(value))}
            aria-label="Language selector"
          />
          <AppButton aria-label={t("nav.getStarted")} onClick={() => scrollTo("contact")}>
            {t("nav.getStarted")}
          </AppButton>
        </Actions>
        <MobileToggle aria-label={t("nav.openMenu")} onClick={() => setOpen(true)}>
          <MenuOutlined style={{ fontSize: 20 }} />
        </MobileToggle>
      </HeaderInner>
      <Drawer
        title={t("brand.name")}
        placement="top"
        open={open}
        onClose={() => setOpen(false)}
        height={330}
        aria-label="Mobile menu drawer"
      >
        <DrawerActions>
          {nav.map((item) => (
            <AppButton key={item.id} variant="outline" onClick={() => scrollTo(item.id)} aria-label={item.label}>
              {item.label}
            </AppButton>
          ))}
          <Segmented
            value={i18n.language}
            options={[
              { label: "EN", value: "en" },
              { label: "AR", value: "ar" }
            ]}
            onChange={(value) => void i18n.changeLanguage(String(value))}
            aria-label="Mobile language selector"
          />
        </DrawerActions>
      </Drawer>
    </HeaderWrap>
  );
}

export default Header;
