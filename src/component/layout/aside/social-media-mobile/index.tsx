import LinkIcon from "src/component/ui/icons/link-icon";

export default function SocialMediaMobile() {
  return (
    <aside>
      <a
        href="https://github.com/fikrialwan"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src="/assets/images/github.png" alt="Github icon mobile" />
      </a>
      <a
        href="https://www.linkedin.com/in/fikri-alwan/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src="/assets/images/linkedin.png" alt="Linkedin icon mobile" />
      </a>
      <div>
        <LinkIcon />
      </div>
    </aside>
  );
}
