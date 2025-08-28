import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import connectMongoDB from '@/lib/db/mongodb'
import User from '@/auth/models/user'

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name: 'credentials',
            credentials:{
                email:{label: 'Email', type: 'text'},
                password:{label: 'Password', type: 'password'}
            },
            async authorize(credentials){
                await connectMongoDB()

                const user = await User.findOne({email: credentials.email.toLowerCase().trim()})
                if(!user) throw new Error("User not found");

                const isMatch = await user.comparePassword(credentials.password)
                if(!isMatch) throw new Error('Invalid Password')

                return{
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }                
            }
        })
    ],
    session:{
        strategy: 'jwt'         //saving sessions as jwt
    },
    callbacks: {
        async jwt({token, user}){
            if(user){
                token.role = user.role
            }
            return token
        },
        async session({session, token}){
            session.user.role = token.role
            return session
        }
    },
    pages: {
        signIn: '/login'
    }
})

export { handler as GET, handler as POST };