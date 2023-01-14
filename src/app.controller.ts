import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('report/:id')
export class AppController {

  @Get('income')
  getAllReports() {
    return [];
  }

  @Get(':id')
  getReportById() {
    return [];
  }

  @Post(':id')
  createReport() {
    return 'created';
  }

  @Put(':id')
  updateReport() {
    return 'updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'updated';
  }

}