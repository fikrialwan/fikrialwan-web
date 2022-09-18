import { useState } from "react";
import { experienceData, ExperienceDataType } from "src/data/experience-data";

export default function Experience() {
  const [experienceKeyShow, setExperienceKeyShow] = useState<number>(0);

  const handleCompanyClick = (key: number) => {
    setExperienceKeyShow(key);
  };

  return (
    <section>
      <h2>My Experience</h2>
      <article>
        <section>
          {experienceData.map(
            ({ company, position }: ExperienceDataType, key: number) => {
              return (
                <article key={key} onClick={() => handleCompanyClick(key)}>
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
          <p>{experienceData[experienceKeyShow].desc}</p>
        </section>
      </article>
    </section>
  );
}
