import { geingInstance } from './common'
import Question from '../../models/question'

export interface GetQuestionsReq {
  offset?: number
  limit?: number
}

export interface GetQuestionsRes {
  questions: Question[]
}

export const getQuestions = async (
  req: GetQuestionsReq
): Promise<GetQuestionsRes> => {
  const res = await geingInstance.get('/questions', {
    params: req
  })

  // when no content
  if (res.status === 204) {
    return {
      questions: []
    }
  }

  return res.data
}
