import { Request, Response } from "express";

class HomeController {
  index(req: Request, res: Response) {
    res.status(200).json({ info: "Walmart" });
  }
}

export const homeController = new HomeController();