import { geingInstance } from "./common";

export interface GetQuestionsReq {
  page: number
}

export interface GetQuestionsRes {
  id: number
  body: string
  created_at: string
}

export const getQuestions = async (
  req: GetQuestionsReq
): Promise<GetQuestionsRes> => {
  return await geingInstance.get('/questions', {
    params: {
      page: req.page
    }
  })
}
