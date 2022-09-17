import { HeroContentType } from "src/data";

interface HeroPropsType {
  isHome: Boolean;
  data: HeroContentType;
}

export default function Hero({ isHome, data }: HeroPropsType) {
  if (isHome) {
    const {
      greeting,
      title: titles,
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
          {titles.split("\n").map((title: string, key: number) => (
            <p key={key}>{title}</p>
          ))}
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
      title: titles,
      desc,
      img: { url: imgUrl, alt: imgAlt },
    } = data;
    return (
      <section>
        <article>
          {titles.split("\n").map((title: string, key: number) => (
            <p key={key}>{title}</p>
          ))}
          <p>{desc}</p>
        </article>
        <div>
          <img src={imgUrl} alt={imgAlt} />
        </div>
      </section>
    );
  }
}
