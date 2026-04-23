import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Bottom, ColTitle, FooterWrap, LinkItem, Top } from "./styles";

function Footer(): JSX.Element {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <FooterWrap>
      <Top>
        <div>
          <h3>{t("brand.name")}</h3>
          <p>{t("footer.description")}</p>
          <p>
            <TwitterOutlined aria-label="Twitter icon" /> <LinkedinOutlined aria-label="LinkedIn icon" />{" "}
            <GithubOutlined aria-label="GitHub icon" />
          </p>
        </div>
        <div>
          <ColTitle>{t("footer.columns.product")}</ColTitle>
          <LinkItem href="#features">{t("footer.links.features")}</LinkItem>
          <LinkItem href="#features">{t("footer.links.integrations")}</LinkItem>
          <LinkItem href="#pricing">{t("footer.links.pricing")}</LinkItem>
          <LinkItem href="#">{t("footer.links.changelog")}</LinkItem>
        </div>
        <div>
          <ColTitle>{t("footer.columns.company")}</ColTitle>
          <LinkItem href="#about">{t("footer.links.about")}</LinkItem>
          <LinkItem href="#">{t("footer.links.careers")}</LinkItem>
          <LinkItem href="#">{t("footer.links.blog")}</LinkItem>
          <LinkItem href="#contact">{t("footer.links.contact")}</LinkItem>
        </div>
        <div>
          <ColTitle>{t("footer.columns.resources")}</ColTitle>
          <LinkItem href="#">{t("footer.links.docs")}</LinkItem>
          <LinkItem href="#">{t("footer.links.help")}</LinkItem>
          <LinkItem href="#">{t("footer.links.status")}</LinkItem>
          <LinkItem href="#">{t("footer.links.community")}</LinkItem>
        </div>
        <div>
          <ColTitle>{t("footer.columns.legal")}</ColTitle>
          <LinkItem href="#">{t("footer.links.privacy")}</LinkItem>
          <LinkItem href="#">{t("footer.links.terms")}</LinkItem>
          <LinkItem href="#">{t("footer.links.security")}</LinkItem>
          <LinkItem href="#">{t("footer.links.cookies")}</LinkItem>
        </div>
      </Top>
      <Bottom>
        <span>{t("footer.copyright", { year })}</span>
        <span>{t("footer.madeWith")}</span>
      </Bottom>
    </FooterWrap>
  );
}

export default Footer;
