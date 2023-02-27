import { Request} from 'express'

export interface IRequest extends Request {
  requestTimestamp?: string
}

export interface DummyObject {
  id: number|string
  title: string
  category: string
  description: string
}