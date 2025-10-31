import type { Translation } from '@helpwave/hightide'
import { useLanguage } from '@helpwave/hightide'
import { useTranslation } from '@helpwave/hightide'
import { SectionBase } from '@/components/sections/SectionBase'

type RoadmapItem = {
  name: string,
  translation: Translation<{ description: string, start: string }>,
}

const roadmapItems: RoadmapItem[] = [
  {
    name: 'helpwave tasks',
    translation: {
      de: {
        description: 'Erhöhe die Produktivität deines klinischen Teams mit helpwave tasks, einem modernen Kanban-Interface, das Lean-Projektmanagement-Methodiken auf die klinische Umgebung anwendet.',
        start: 'Adaption ab Q2.2024',
      },
      en: {
        description: 'Increase the productivity of your clinical team with helpwave tasks, a modern Kanban interface that applies Lean project management methodologies to the clinical environment.',
        start: 'Adaptation from Q2.2024',
      },
    }
  },
  {
    name: 'mediQuu Viva',
    translation: {
      de: {
        description: 'Weiterentwicklung einer arzt-geführten Fallakte für eine chronologische Dokumentation von Behandlungen und Versorgungsleistungen mit einer Integration für bestimmte Praxisverwaltungssysteme.',
        start: 'Entwicklung ab Q3.2024',
      },
      en: {

        description: 'A process-oriented software for patients and healthcare providers, enabling seamless and secure communication, including encrypted requests, chat function, and automatic appointment reminders.',
        start: 'Development from Q3.2024',
      },
    }
  },
  {
    name: 'App zum Doc',
    translation: {
      de: {
        description: 'Die App zum Doc entlastet Mitarbeiterinnen in Arztpraxen durch strukturierte und digitale Anfragen für Rezepte und Überweisungen. Die Option Videosprechstunden via App durchzuführen ist in Planung.',
        start: 'Ausbau ab Q3.2024',
      },
      en: {
        description: 'The App zum Doc relieves staff in medical practices by providing structured and digital requests for prescriptions and referrals.',
        start: 'Expansion from Q3.2024',
      },
    }
  },
  {
    name: 'helpwave call',
    translation: {
      de: {
        description: 'Diese Software bietet eine umfassende Lösung für ambulante und stationäre Dienste, die nahtlose und einfache Telemedizin-Kommunikation bequem und von überall aus ermöglicht.',
        start: 'Neuentwicklung ab Q4.2024',
      },
      en: {
        description: 'This software offers a comprehensive solution for outpatient and inpatient services, enabling seamless and simple telemedicine communication conveniently from anywhere.',
        start: 'New development from Q4.2024',
      },
    }
  },
  {
    name: 'helpwave cloud',
    translation: {
      de: {
        description: 'Speichern Sie Ihre Daten in einer sicheren Serverumgebung vor Ort und verbessern Sie den Zugriff darauf für sich selbst und Ihre Patienten.',
        start: 'Adaption ab Q1.2025',
      },
      en: {
        description: 'Secure your data in a safe server environment on-site and enhance access to it for yourself and your patients.',
        start: 'Adaptation from Q1.2025',
      },
    }
  },
]

type RoadmapTranslation = {
  title: string,
  description: string,
}

const defaultRoadmapTranslation: Translation<RoadmapTranslation> = {
  en: {
    title: 'What\'s next?',
    description: 'Dive into how helpwave pursues the mediQuu vision.',
  },
  de: {
    title: 'Was passiert als nächstes?',
    description: 'Erkunden Sie, wie helpwave die Vision von mediQuu weiterführen wird.',
  }
}

export const RoadmapSection = () => {
  const translation = useTranslation([defaultRoadmapTranslation])
  const { language } = useLanguage()
  return (
    <SectionBase className="col w-full">
      <h2 className="typography-title-lg text-primary">{translation('title')}</h2>
      <span className="text-description mb-1">{translation('description')}</span>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 mt-4 w-full justify-start gap-4">
        {roadmapItems.map(value => (
          <div key={value.name} className="w-full bg-surface text-on-surface shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow transition-1000">
            <h3 className="typography-title-md block">{value.name}</h3>
            <span className="typography-label-lg block text-primary mb-2">{value.translation[language].start}</span>
            <span className="text-description">{value.translation[language].description}</span>
          </div>
        ))}
      </div>
    </SectionBase>
  )
}
