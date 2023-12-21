import { Metadata } from 'next';
import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
// import { WebVitals } from './_components/web-vitals'
import { NavigationEvents } from './_components//navigation-events'

import { Suspense } from 'react'
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* <WebVitals /> */}
        {children}
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
      </body>
    </html>
  );
}
