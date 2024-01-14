import { Layout } from '@/components/dom/Layout';
import '@/global.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Erik Edmonds',
  description: 'A portfolio of projects using Computer Vision, Simulation, and 3D Modeling.',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang='en' className='antialiased darkMode'>
            <head />
                <body>
                    <Providers>
                        <Layout>{children}</Layout>
                    </Providers>
                </body>
        </html>
    )
}
