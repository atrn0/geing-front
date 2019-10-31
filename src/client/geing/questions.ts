import { geingInstance } from './common'

interface SubmitQuestionReq {
  body: string
}

interface SubmitQuestionRes {
  question_body: string
}

const submitQuestion = async (
  req: SubmitQuestionReq
): Promise<SubmitQuestionRes> => {
  return await geingInstance.post('/questions; charset=UTF-8', req)
}

export { SubmitQuestionReq, SubmitQuestionRes, submitQuestion }
