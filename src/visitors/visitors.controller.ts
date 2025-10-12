import { Controller, Get, Post, Body } from '@nestjs/common';
import { VisitorsService } from './visitors.service';
import { CreateVisitorDto } from './dto/create-visitor.dto';

@Controller('visitors')
export class VisitorsController {
  constructor(private readonly visitorsService: VisitorsService) {}

  @Post()
addVisitor(@Body() createVisitorDto: CreateVisitorDto) {
  return this.visitorsService.addVisitor(
    createVisitorDto.postId,
    createVisitorDto.userId,
  );
}

  @Get()
  getVisitors() {
    return this.visitorsService.getStats();
  }
}
