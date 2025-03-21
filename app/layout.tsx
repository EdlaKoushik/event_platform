// import type { Metadata } from 'next'
// import { Poppins } from 'next/font/google'
// import './globals.css'
// import { ClerkProvider,SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton, } from '@clerk/nextjs'

// const poppins = Poppins({ subsets: ['latin'] ,
//   weight:['400','500','600','700'],
//   variable:'--font-poppins',
// })

// export const metadata: Metadata = {
//   title:'evently',
//   description: 'Evently is a platform for event management',
//   icons:{
//     icon:"assets/images/logo.svg"
//   }
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">3
//       <body className={poppins.variable}>{children}</body>  
//       <header className="flex justify-end items-center p-4 gap-4 h-16">
//             <SignedOut>
//               <SignInButton />
//               <SignUpButton />
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//           </header>
//     </html>
//     </ClerkProvider>
//   )
// }






import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'evently',
  description: 'Evently is a platform for event management',
  icons: {
    icon: "assets/images/logo.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>
          {children}
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        </body>
      </html>
    </ClerkProvider>
  )
}
