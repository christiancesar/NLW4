import { Router } from "express";
import { AnswerController } from "../controllers/AnswerController";
import { NpsController } from "../controllers/NpsController";
import { SendEmailController } from "../controllers/SendMailController";
import { SurveysController } from "../controllers/SurveysController";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendEmailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post("/users", userController.create);

router.get("/surveys", surveysController.show);
router.post("/surveys", surveysController.create);

router.post("/sendMail", sendMailController.execute);

router.post("/answers/:value", answerController.execute);

router.get("/nps/:survey_id", npsController.execute)


export { router }