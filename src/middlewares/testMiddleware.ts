/* eslint-disable no-console */
import {  NextFunction, Response } from 'express'
import { IRequest } from '../@types'

export const requestTimestamp = (req: IRequest, res: Response, next: NextFunction) => {
  req.requestTimestamp = new Date().toISOString()

  res.on('finish', () => {
    console.log(req.method, decodeURI(req.url), res.statusCode, res.statusMessage, req.requestTimestamp)
  })
  next()
}