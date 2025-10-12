import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Visitor } from './schemas/visitor.schema';

@Injectable()
export class VisitorsService {
  constructor(@InjectModel(Visitor.name) private visitorModel: Model<Visitor>) {}

  async addVisitor(postId: string, userId: string) {
    const visitor = new this.visitorModel({ postId, userId });
    return visitor.save();
  }

  async getStats() {
    const totalVisitors = await this.visitorModel.countDocuments();
    const totalActiveUsers = (await this.visitorModel.distinct('userId')).length;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const dailyActiveUsers = (
      await this.visitorModel.distinct('userId', { date: { $gte: today, $lt: tomorrow } })
    ).length;

    return { totalVisitors, totalActiveUsers, dailyActiveUsers };
  }
}
