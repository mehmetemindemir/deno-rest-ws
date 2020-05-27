import { RouterContext } from "https://deno.land/x/oak/mod.ts";

import QuestionService from "../services/QuestionService.ts";

const questionService = new QuestionService();

export const getQuestion = async (context: RouterContext) => {
  context.response.body = await questionService.getQuestion();
};

export const createQuestion = async (context: RouterContext) => {
  const { request, response } = context;

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid recipe data" };
    return;
  }

  const { value: { qId,qText,c1,c2,c3,c4 } } = await request.body();


  const questionId = await questionService.createQuestion(
    { qId,qText,c1,c2,c3,c4 },
  );

  response.body = { msg: "Question Created", questionId };
};
