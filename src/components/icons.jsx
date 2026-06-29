import { Github, Linkedin, Mail, Twitter, Globe, Instagram, Youtube, FileText } from 'lucide-react'

// Maps the "icon" string in portfolio.json -> a lucide icon component.
const map = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  email: Mail,
  twitter: Twitter,
  x: Twitter,
  globe: Globe,
  website: Globe,
  instagram: Instagram,
  youtube: Youtube,
  resume: FileText,
}

export function SocialIcon({ name, ...props }) {
  const Icon = map[(name || '').toLowerCase()] || Globe
  return <Icon {...props} />
}
