import { geingInstance } from "./common";
import Question from "../../models/question";

export interface GetQuestionsReq {
  page: number
}

export interface GetQuestionsRes {
  questions: Question[]
}

export const getQuestions = async (
  req: GetQuestionsReq
): Promise<GetQuestionsRes> => {
  const res = await geingInstance.get('/questions', {
    params: {
      page: req.page
    }
  })
  return res.data
}
