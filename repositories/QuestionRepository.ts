import db from "../db/mongo.ts";
import IQuestion from "../entities/IQuestion.ts";

class QuestionRepository {
  constructor() {}

  readonly questionCollection = db.collection("question");

  async find() {
    const question = await this.questionCollection.find();
    return question;
  }

  async insertOne(question: IQuestion) {
    const { $oid } = await this.questionCollection.insertOne(question);
    return $oid;
  }
}

export default QuestionRepository;
