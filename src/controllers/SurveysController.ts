import { Request, Response } from "express"
class SurveysController {
    async create(request: Request, response: Response) {
        const { title, description } = request.body;
    }
}

export { SurveysController }