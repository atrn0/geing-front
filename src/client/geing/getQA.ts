import { geingInstance } from './common'

export interface GetQAReq {
  id: number
}

export interface GetQARes {
  id: number
  question: string
  answer: string
  created_at: string
}

export const getQA = async (req: GetQAReq): Promise<GetQARes> => {
  const res = await geingInstance.get(`/questions/${req.id}`)
  return res.data
}
