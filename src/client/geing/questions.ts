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
  return await geingInstance.post('/questions', req, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export { SubmitQuestionReq, SubmitQuestionRes, submitQuestion }
