
"use client";
import { ClerkProvider } from "@clerk/nextjs";
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClerkProvider>
      <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
        {children}
      </div>
      </ClerkProvider>
    )
  }
  
  export default Layout