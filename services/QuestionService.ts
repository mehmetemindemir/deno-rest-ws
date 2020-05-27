
import QuestionRepository from "../repositories/QuestionRepository.ts";
import IQuestion from "../entities/IQuestion.ts";

class QuestionService {
  constructor() {}

  readonly questionRepository = new QuestionRepository();

  getQuestion = async () => {
    return await this.questionRepository.find();
  };

  createQuestion = async (question: IQuestion) => {
    return await this.questionRepository.insertOne(question);
  };
}

export default QuestionService;
