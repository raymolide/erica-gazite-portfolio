import { client } from "@/sanity/lib/client"
import type { PortableTextBlock } from "sanity"

export interface HeroSection {
  _id: string
  name: string
  roles: string[]
  description: string
  profileImage?: any
  backgroundImage?: any
  ctaButtons?: Array<{
    text: string
    link: string
    style: "primary" | "secondary"
  }>
}

export interface AboutSection {
  _id: string
  title: string
  description: PortableTextBlock[]
  profileImage?: any
  highlights: Array<{
    icon: string
    title: string
    description: string
  }>
}

export interface Experience {
  _id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  isActive: boolean
  location?: string
  type?: string
  description: string
  achievements?: string[]
  skills?: string[]
  companyLogo?: any
  order: number
}

export interface Education {
  _id: string 
  startDate: string
  endDate?: string 
  order: number
  degree: string;
  institution: string;
  period: string;
  duration: string;
  location: string;
  status: string;
  grade: string;
  description?: string;
  keySubjects?: string[];
  highlights?: string[];
  achievements?: string[];
  institutionLogo: string;
  color: string;
  type: string;
}

export interface Skill {
  _id: string
  name: string
  category: "technical" | "languages" | "professional"
  level?: number
  levelText?: string
  flag?: string
  order: number
}
 
export interface Project {
  _id: string
  title: string
  slug: { current: string }
  category: string
  description: string
  fullDescription: PortableTextBlock[]
  featuredImage: any
  gallery?: any[]
  tags?: string[]
  status: string
  year: string
  client?: string
  duration?: string
  team?: string
  results?: string[]
  projectUrl?: string
  featured: boolean
  order: number
}

export interface SocialCause {
  _id: string
  title: string
  description: string
  icon?: string
  impact: string
  category: string
  image?: any
  order: number
}

export interface ContactInfo {
  _id: string
  email: string
  phone?: string
  location?: string
  socialLinks?: Array<{
    platform: string
    url: string
    icon: string
  }>
  availability?: string
  responseTime?: string
}

// Queries
export async function getHeroSection(): Promise<HeroSection | null> {
  return await client.fetch(`*[_type == "heroSection"][0]`)
}

export async function getAboutSection(): Promise<AboutSection | null> {
  return await client.fetch(`*[_type == "aboutSection"][0]`)
}

export async function getExperiences(): Promise<Experience[]> {
  return await client.fetch(`*[_type == "experience"] | order(order asc)`)
}

export async function getEducation(): Promise<Education[]> {
  return await client.fetch(`*[_type == "education"] | order(order asc)`)
}

export async function getSkills(): Promise<Skill[]> {
  return await client.fetch(`*[_type == "skill"] | order(category asc, order asc)`)
}

export async function getProjects(): Promise<Project[]> {
  return await client.fetch(`*[_type == "project"] | order(order asc)`)
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return await client.fetch(`*[_type == "project" && featured == true] | order(order asc)`)
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return await client.fetch(`*[_type == "project" && slug.current == $slug][0]`, { slug })
}

export async function getSocialCauses(): Promise<SocialCause[]> {
  return await client.fetch(`*[_type == "socialCause"] | order(order asc)`)
}

export async function getContactInfo(): Promise<ContactInfo | null> {
  return await client.fetch(`*[_type == "contactInfo"][0]`)
}
