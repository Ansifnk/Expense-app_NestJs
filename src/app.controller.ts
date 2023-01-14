import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { report } from "process";
import { data, ReportType } from "./data";
import { v4 as uuid } from 'uuid'

@Controller('report/:type')
export class AppController {

  @Get()
  getAllReports(
    @Param('type') type: string
  ) {

    const reportType = type === 'expense' ? ReportType.EXPENSE : ReportType.INCOME


    return data.report.filter(report => report.type == reportType)
  }

  @Get(':id')
  getReportById(@Param('id') id: string) {
    return data.report.find(report => report.id == id)
  }



  @Post()
  createReport(
    @Body() { amount, source }: { source: string, amount: number },
    @Param('type') type: string

  ) {

    const reportType = type === 'expense' ? ReportType.EXPENSE : ReportType.INCOME

    const newReport = {
      id: uuid(),
      source,
      amount,
      type: reportType,
      created_at: new Date(),
      updated_at: new Date()
    }

    data.report.push(newReport)

    return newReport;
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