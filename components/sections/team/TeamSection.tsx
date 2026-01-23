import { SectionBase } from '@/components/sections/SectionBase'
import type { ProfileProps } from '@/components/Profile'
import { Profile } from '@/components/Profile'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'

type TeamGroupProps = {
  members: ProfileProps[],
}

const TeamGroup = ({
  members,
}: TeamGroupProps) => {
  return (
    <div className="mb-8 flex flex-wrap text-center justify-center gap-8">
      {members.map(member => (
        <Profile key={member.name} {...member} />
      ))}
    </div>
  )
}

const imageUrl = (key: string) => `https://cdn.helpwave.de/profile/${key}.png`

const teamData: Record<string, ProfileProps[]> = {
  founders: [
    {
      name: 'Felix Evers',
      roleBadge: 'CEO',
      role: 'Chief Executive Officer',
      imageUrl: imageUrl('felix_evers'),
      tags: ['strategic', 'management', 'innovation'],
      socials: [
        { type: 'linkedin', url: 'https://www.linkedin.com/in/f-evers/' },
        { type: 'mail', url: 'mailto:felix.evers@helpwave.de' },
        { type: 'website', url: 'https://felixevers.de' },
        { type: 'github', url: 'https://github.com/felixevers' },
      ],
      imageClassName: 'w-[230px] h-[200px]'
    },
    {
      name: 'Christian Porschen',
      prefix: 'Dr. med.',
      role: 'Chief Medical Officer',
      roleBadge: 'CMO',
      imageUrl: imageUrl('christian_porschen'),
      tags: ['ai', 'science', 'doctor'],
      socials: [
        { type: 'linkedin', url: 'https://www.linkedin.com/in/cpors/' },
        { type: 'mail', url: 'mailto:christian.porschen@helpwave.de' },
        { type: 'github', url: 'https://github.com/aegis301' },
      ],
      imageClassName: 'w-[230px] h-[200px]'
    },
    {
      name: 'Ludwig Maidowski',
      prefix: 'Dr. med., Dipl.-Jur.',
      suffix: 'Maître en droit, Paris II',
      role: 'Chief Legal Officer',
      roleBadge: 'CLO',
      tags: ['law', 'doctor', 'product'],
      imageUrl: imageUrl('ludwig_maidowski'),
      socials: [
        { type: 'linkedin', url: 'https://www.linkedin.com/in/ludwig-maidowski-896b83208/' },
        { type: 'mail', url: 'mailto:ludwig.maidowski@helpwave.de' },
      ],
      imageClassName: 'w-[200px] h-[200px]'
    },
  ],
  development: [
    {
      name: 'Felix Thape',
      suffix: 'B. Sc. RWTH',
      role: 'fullstack wizard',
      imageUrl: imageUrl('felix_thape'),
      tags: ['maintainer', 'web', 'mobile'],
      socials: [
        { type: 'mail', url: 'mailto:felix.thape@helpwave.de' },
        { type: 'github', url: 'https://github.com/DasProffi' },
      ],
      imageClassName: 'w-[200px] h-[200px]'
    },
    {
      name: 'Jonas Ester',
      role: 'ui/ux prodigy',
      tags: ['uiux', 'web', 'mobile'],
      imageUrl: imageUrl('jonas_ester'),
      socials: [
        { type: 'linkedin', url: 'https://www.linkedin.com/in/jonas-ester-b063a8188/' },
        { type: 'mail', url: 'mailto:jonas.ester@helpwave.de' },
        { type: 'website', url: 'https://www.jonasester.de/' },
      ],
      imageClassName: 'w-[200px] h-[200px]'
    }
  ],
}

const TeamSection = () => {
  const translation = useLandingPageTranslation()

  return (
    <SectionBase>
      <h1 className="sr-only">{translation('team')}</h1>
      {Object.entries(teamData).map(([name, members]) => (
        <TeamGroup key={name} members={members} />
      ))}
    </SectionBase>
  )
}

export default TeamSection
