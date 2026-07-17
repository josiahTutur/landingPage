"use client";

import { useLang } from "@/components/LanguageProvider";

/* Violet statement band: "No magic. Just skills you can learn." */
export default function SkillBand() {
  const { t } = useLang();
  return (
    <section className="band skill-band" id="skill">
      <div className="wrap">
        <p className="skill-a">{t.skill.a}</p>
        <p className="skill-b">
          {t.skill.bPre}
          <span className="accent-serif">{t.skill.bAccent}</span>
          {t.skill.bPost}
        </p>
      </div>
    </section>
  );
}
