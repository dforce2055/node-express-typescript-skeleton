import express, { Request, Response } from 'express'
import { Get, Post, Route, Tags } from 'tsoa'
import dummyData from '../../public/data/dummy-data.json'
import { DummyObject } from '../@types'

interface DummyDataResponse {
  message: string
  data: DummyObject[]
}

// class tsoa declaration for documentation purposes
@Route('/api/v1/data')
export class DataController {
  @Get('/')
  public async getDummyData(): Promise<DummyDataResponse> {
    return {
      message: 'Here is the dummy data',
      data: dummyData
    }
  }
}

// methods to be used in the routes
export const getDummyData =  async (req: Request, res: Response) => {
  const controller = new DataController()
  const response = await controller.getDummyData()
  return res.send(response)
}

export const DataControllerInstance = {
  getDummyData,
}