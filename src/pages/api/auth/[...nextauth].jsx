import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Optional: Perform custom actions after successful sign-in, e.g., persisting user data in your database
      return true
    },
    async session({ session, token }) {
      // Optional: Add custom data to the session object. For example, to access user email:
      session.user.email = token.email
      return session
    },
  },
  // Optional: Customizing JWT payload (not covered in this example)
  // ... other NextAuth.js options
})
