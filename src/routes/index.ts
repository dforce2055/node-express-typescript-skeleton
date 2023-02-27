import { Application } from 'express'
import {
  DataControllerInstance,
  PingControllerInstance
} from '../controllers'
import { requestTimestamp } from '../middlewares'

export const loadApiEndpoints = (app: Application): void => {
  // v1
  app.get('/api/v1/data',requestTimestamp,  DataControllerInstance.getDummyData)
  
  app.get('/api/v1/ping', requestTimestamp, PingControllerInstance.getMessage)
  app.get('/api/v1/ping/:id', requestTimestamp, PingControllerInstance.getById)
}
