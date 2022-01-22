const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: '123', user: { email: 'loren@ipsum.com' } }
useSession.mockImplementation(() => [session])
