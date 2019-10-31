import { geingInstance } from './common'

export interface SubmitQuestionReq {
  body: string
}

export interface SubmitQuestionRes {
  question_body: string
}

export const submitQuestion = async (
  req: SubmitQuestionReq
): Promise<SubmitQuestionRes> => {
  return await geingInstance.post('/questions', req, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
