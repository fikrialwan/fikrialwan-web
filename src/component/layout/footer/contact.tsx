import getInTouchIlustration from "src/component/ui/images/get-in-touch-ilustration.webp";

export default function Contact() {
  return (
    <section>
      <article>
        <h2>Get In Touch</h2>
        <p>
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hello,
          I'll try my best to get back to you!
        </p>
        <a href="mailto:fikriar93@gmail.com">Say hello</a>
      </article>
      <div>
        <img src={getInTouchIlustration} alt="get in touch ilustration" />
      </div>
    </section>
  );
}
