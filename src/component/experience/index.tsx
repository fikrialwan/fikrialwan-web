import { experienceData, ExperienceDataType } from "src/data/experience-data";

export default function Experience() {
  return (
    <section>
      <h2>My Experience</h2>
      <article>
        <section>
          {experienceData.map(
            ({ company, position }: ExperienceDataType, key: number) => {
              return (
                <article key={key}>
                  <h3>{company}</h3>
                  <ul>
                    <li>{position}</li>
                  </ul>
                </article>
              );
            }
          )}
        </section>
        <section>
          <p>{experienceData[0].desc}</p>
        </section>
      </article>
    </section>
  );
}
