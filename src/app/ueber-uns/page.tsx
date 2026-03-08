import { Metadata } from 'next';
import { Cta } from '@/components/cta';
import { Section } from '@/components/section';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Über uns',
  description: 'Lernen Sie die MB Bauausführungen GmbH und unseren Anspruch an Qualität kennen.',
  alternates: {
    canonical: '/ueber-uns'
  },
  openGraph: {
    title: 'Über uns | MB Bauausführungen GmbH',
    description: 'Baukompetenz in Berlin mit Fokus auf Zuverlässigkeit und Qualität.',
    url: `${siteConfig.domain}/ueber-uns`
  }
};

export default function AboutPage() {
  return (
    <>
      <Section title="Über uns" description="Bauen mit Verantwortung, Klarheit und Erfahrung.">
        <div className="max-w-reading space-y-5 text-slate-700">
          <p>
            Die MB Bauausführungen GmbH mit Sitz in Berlin begleitet private und gewerbliche Bauherren bei Neubau-,
            Umbau- und Sanierungsprojekten. Unser Anspruch ist eine technisch saubere und wirtschaftlich
            sinnvolle Umsetzung.
          </p>
          <p>
            Unter der Leitung von {siteConfig.company.managingDirector} arbeiten wir mit eingespielten Teams,
            strukturierter Baukoordination und klarer Kommunikation. Wir stehen für verbindliche Zusagen, realistische
            Zeitpläne und eine partnerschaftliche Zusammenarbeit.
          </p>
          <p>
            Von der ersten Abstimmung bis zur Übergabe behalten wir Qualität, Kosten und Termine im Blick. Unser
            Schwerpunkt liegt auf Projekten in Berlin.
          </p>
        </div>
      </Section>
      <Cta />
    </>
  );
}
