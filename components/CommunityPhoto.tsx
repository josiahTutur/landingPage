"use client";

import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";

/* Full-bleed community photograph — the human texture between statements. */
export default function CommunityPhoto() {
  const { t } = useLang();
  return (
    <section className="community-photo" id="community" aria-label={t.community.alt}>
      <Image
        src="/images/community.jpg"
        alt={t.community.alt}
        fill
        sizes="100vw"
        className="community-img"
      />
    </section>
  );
}
