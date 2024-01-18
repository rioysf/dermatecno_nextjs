import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css'

export const metadata = {
  title: 'Dermatecno Apps',
  description: 'SaaS system that designed especially for you - Aesthetic Clinic',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
