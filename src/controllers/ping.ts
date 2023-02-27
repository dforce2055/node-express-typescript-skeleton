import express, { Request, Response } from 'express'
import { Get, Post, Route, Tags } from 'tsoa'

interface PingResponse {
  message: string
}

// class tsoa declaration for documentation purposes
@Route('/api/v1/ping')
export class PingController {
  @Get('{id}')
  public async getById(id: string): Promise<PingResponse> {
    return {
      message: `pong id ${id}`
    }
  }
  
  @Get('/')
  public async getMessage(): Promise<PingResponse> {
    return {
      message: 'pong'
    }
  }
}

// methods to be used in the routes
export const getById = async (req: Request, res: Response) => {
  const { id } = req.params ?? '1'
  if (!id)
    return res.status(400).send({
      message: 'id is required'
    })
  
  const controller = new PingController()
  const response = await controller.getById(id)
  return res.send(response)
}
export const getMessage = async (req: Request, res: Response) => {
  const controller = new PingController()
  const response = await controller.getMessage()
  return res.send(response)
}

export const PingControllerInstance = {
  getMessage,
  getById
}