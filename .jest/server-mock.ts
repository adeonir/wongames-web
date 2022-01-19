import { server } from '../src/utils/mock-server/server'

global.fetch = require('node-fetch')

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
