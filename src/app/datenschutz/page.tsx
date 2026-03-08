import { Metadata } from 'next';
import { Section } from '@/components/section';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzhinweise der MB Bauausführungen GmbH.',
  alternates: {
    canonical: '/datenschutz'
  }
};

export default function PrivacyPage() {
  return (
    <Section title="Datenschutz">
      <div className="prose-content max-w-reading">
        <p>
          Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst. Diese Seite informiert über Art, Umfang und Zweck
          der Verarbeitung von Daten auf dieser Website.
        </p>
        <h2>Verantwortliche Stelle</h2>
        <p>
          {siteConfig.company.name}, {siteConfig.company.address.streetAddress}, {siteConfig.company.address.postalCode}{' '}
          {siteConfig.company.address.addressLocality}, Deutschland.
        </p>
        <h2>Hosting und Server-Logfiles</h2>
        <p>
          Beim Besuch dieser Website werden technisch notwendige Daten (z. B. IP-Adresse, Datum/Uhrzeit, aufgerufene
          Seite, User-Agent) in Server-Logfiles verarbeitet, um den sicheren Betrieb zu gewährleisten.
        </p>
        <h2>Kontakt per Telefon oder E-Mail</h2>
        <p>
          Wenn Sie uns telefonisch oder per E-Mail kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer
          Anfrage sowie für mögliche Rückfragen.
        </p>
        <h2>Rechtsgrundlagen</h2>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren
          Betrieb der Website) sowie Art. 6 Abs. 1 lit. b DSGVO (Bearbeitung vorvertraglicher Anfragen).
        </p>
        <h2>Speicherdauer</h2>
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke erforderlich ist oder
          gesetzliche Aufbewahrungspflichten bestehen.
        </p>
        <h2>Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Widerspruch
          gegen die Verarbeitung Ihrer Daten im gesetzlichen Rahmen. Außerdem besteht ein Beschwerderecht bei einer
          Datenschutzaufsichtsbehörde.
        </p>
      </div>
    </Section>
  );
}
