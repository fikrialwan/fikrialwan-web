import { HeroContentType } from "src/data";

interface HeroPropsType {
  isHome: Boolean;
  data: HeroContentType;
}

export default function Hero({ isHome, data }: HeroPropsType) {
  if (isHome) {
    const {
      greeting,
      title: heroTitle,
      desc,
      descHighlight,
      img: { url: imgUrl, alt: imgAlt },
      button,
    } = data;
    const { title: buttonTitle, link: buttonLink } = button!;
    return (
      <section>
        <article>
          <p>{greeting}</p>
          <p>{heroTitle}</p>
          <p>
            {desc} <span>{descHighlight}</span>
          </p>
          <a href={buttonLink} target="_blank" rel="noreferrer noopener">
            {buttonTitle}
          </a>
        </article>
        <div>
          <img src={imgUrl} alt={imgAlt} />
        </div>
      </section>
    );
  } else {
    const {
      title,
      desc,
      img: { url: imgUrl, alt: imgAlt },
    } = data;
    return <section></section>;
  }
}
