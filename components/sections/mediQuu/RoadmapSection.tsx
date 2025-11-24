import type { HightideTranslationLocales } from '@helpwave/hightide'
import { useLocale } from '@helpwave/hightide'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import { SectionBase } from '@/components/sections/SectionBase'
import type { Translation } from '@helpwave/internationalization'

type RoadmapItem = {
  name: string,
  translation: Translation<HightideTranslationLocales, { description: string, start: string }>,
}

const roadmapItems: RoadmapItem[] = [
  {
    name: 'helpwave tasks',
    translation: {
      'de-DE': {
        description: 'Erhöhe die Produktivität deines klinischen Teams mit helpwave tasks, einem modernen Kanban-Interface, das Lean-Projektmanagement-Methodiken auf die klinische Umgebung anwendet.',
        start: 'Adaption ab Q2.2024',
      },
      'en-US': {
        description: 'Increase the productivity of your clinical team with helpwave tasks, a modern Kanban interface that applies Lean project management methodologies to the clinical environment.',
        start: 'Adaptation from Q2.2024',
      },
    }
  },
  {
    name: 'mediQuu Viva',
    translation: {
      'de-DE': {
        description: 'Weiterentwicklung einer arzt-geführten Fallakte für eine chronologische Dokumentation von Behandlungen und Versorgungsleistungen mit einer Integration für bestimmte Praxisverwaltungssysteme.',
        start: 'Entwicklung ab Q3.2024',
      },
      'en-US': {

        description: 'A process-oriented software for patients and healthcare providers, enabling seamless and secure communication, including encrypted requests, chat function, and automatic appointment reminders.',
        start: 'Development from Q3.2024',
      },
    }
  },
  {
    name: 'App zum Doc',
    translation: {
      'de-DE': {
        description: 'Die App zum Doc entlastet Mitarbeiterinnen in Arztpraxen durch strukturierte und digitale Anfragen für Rezepte und Überweisungen. Die Option Videosprechstunden via App durchzuführen ist in Planung.',
        start: 'Ausbau ab Q3.2024',
      },
      'en-US': {
        description: 'The App zum Doc relieves staff in medical practices by providing structured and digital requests for prescriptions and referrals.',
        start: 'Expansion from Q3.2024',
      },
    }
  },
  {
    name: 'helpwave call',
    translation: {
      'de-DE': {
        description: 'Diese Software bietet eine umfassende Lösung für ambulante und stationäre Dienste, die nahtlose und einfache Telemedizin-Kommunikation bequem und von überall aus ermöglicht.',
        start: 'Neuentwicklung ab Q4.2024',
      },
      'en-US': {
        description: 'This software offers a comprehensive solution for outpatient and inpatient services, enabling seamless and simple telemedicine communication conveniently from anywhere.',
        start: 'New development from Q4.2024',
      },
    }
  },
  {
    name: 'helpwave cloud',
    translation: {
      'de-DE': {
        description: 'Speichern Sie Ihre Daten in einer sicheren Serverumgebung vor Ort und verbessern Sie den Zugriff darauf für sich selbst und Ihre Patienten.',
        start: 'Adaption ab Q1.2025',
      },
      'en-US': {
        description: 'Secure your data in a safe server environment on-site and enhance access to it for yourself and your patients.',
        start: 'Adaptation from Q1.2025',
      },
    }
  },
]

export const RoadmapSection = () => {
  const translation = useLandingPageTranslation()
  const { locale } = useLocale()
  return (
    <SectionBase className="col w-full">
      <h2 className="typography-title-lg text-primary">{translation('whatsNext')}</h2>
      <span className="text-description mb-1">{translation('whatsNextDescription')}</span>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 mt-4 w-full justify-start gap-4">
        {roadmapItems.map(value => (
          <div key={value.name} className="w-full bg-surface text-on-surface shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow transition-1000">
            <h3 className="typography-title-md block">{value.name}</h3>
            <span className="typography-label-lg block text-primary mb-2">{value.translation[locale].start}</span>
            <span className="text-description">{value.translation[locale].description}</span>
          </div>
        ))}
      </div>
    </SectionBase>
  )
}
