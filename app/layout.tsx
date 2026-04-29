import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const description =
  'Independent consultant specializing in GPU architecture, parallel compute, RTL design, and verification. Available for contract work worldwide.'

export const metadata: Metadata = {
  metadataBase: new URL('https://liland.dev'),
  title: 'Eivind Liland - Hardware & Software Consultant',
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Eivind Liland - Hardware & Software Consultant',
    description,
    url: 'https://liland.dev',
    siteName: 'Eivind Liland',
    images: [
      {
        url: '/images/profi-profil4.jpg',
        width: 1200,
        height: 630,
        alt: 'Eivind Liland - Hardware & Software Consultant',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eivind Liland - Hardware & Software Consultant',
    description,
    images: ['/images/profi-profil4.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Person', 'ProfessionalService'],
    name: 'Eivind Liland',
    jobTitle: 'Hardware & Software Consultant',
    description,
    url: 'https://liland.dev',
    email: 'hello@liland.dev',
    sameAs: ['https://www.linkedin.com/in/eivlil01'],
    knowsAbout: [
      'GPU Architecture',
      'Parallel Compute',
      'RTL Design',
      'Hardware Verification',
      'SIMT Cores',
      'FPGA',
      'GPU Compute Shaders',
    ],
    alumniOf: [
      {
        '@type': 'Organization',
        name: 'Falanx',
        description: 'Early engineer. Falanx built the original Mali GPU; acquired by ARM in 2006.',
      },
      {
        '@type': 'Organization',
        name: 'ARM',
        description: 'Early engineer on the Mali GPU team at ARM Norway.',
      },
      {
        '@type': 'Organization',
        name: 'Swarm64',
        description: 'Co-founder. FPGA-based database accelerator; acquired by ServiceNow in 2021.',
      },
      {
        '@type': 'Organization',
        name: 'Orbital Machines',
        description: 'Founder & CEO. Newspace startup building propellant pumps for launchers, landers, and zero-emission aviation.',
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
