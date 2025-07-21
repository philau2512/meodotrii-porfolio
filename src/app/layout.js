import './global.css'
// Remove ThemeToggle import

export const metadata = {
  title: 'meodotrii',
  description: `@meodotrii | meo's archive 🐾`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="text-white bg-gray-800">
        {/* Responsive container – width adjusted for a single column layout */}
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-6">
          {children}
        </div>
      </body>
    </html>
  )
} 