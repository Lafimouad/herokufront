import { Component, OnInit } from '@angular/core';
import { SupportChartData1} from './chart/support-chart-data-1';
import { SupportChartData2} from './chart/support-chart-data-2';
import { SeoChart1 } from './chart/seo-chart-1';
import { SeoChart2 } from './chart/seo-chart-2';
import { SeoChart3 } from './chart/seo-chart-3';
import { PowerCardChart1 } from './chart/power-card-chart-1';
import { PowerCardChart2 } from './chart/power-card-chart-2';
import { CreditService } from 'src/app/services/credit.service';
import { ModeleService } from 'src/app/services/ModeleService';

@Component({
  selector: 'app-dash-default',
  templateUrl: './dash-default.component.html',
  styleUrls: ['./dash-default.component.scss']
})
export class DashDefaultComponent implements OnInit {
  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public powerCardChartData1: any;
  public powerCardChartData2: any;
  public creditList:any;
  public acceptedCreditList:any;
  public refusedCreditList:any;
  public waitingCreditList:any;
  public carNumber:any;


  constructor(private creditServices:CreditService,private modeleService:ModeleService) {
    this.supportChartData1 = SupportChartData1.supportChartData;
    this.supportChartData2 = SupportChartData2.supportChartData;
    this.seoChartData1 = SeoChart1.seoChartData;
    this.seoChartData2 = SeoChart2.seoChartData;
    this.seoChartData3 = SeoChart3.seoChartData;
    this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    this.powerCardChartData2 = PowerCardChart2.powerCardChartData;
  }

  ngOnInit() {
    this.modeleService.getCarNumber().subscribe((res)=>{
      this.carNumber=res;
    })
    this.creditServices.getCredit().subscribe((res)=>{
      this.creditList=res;
      console.log(this.creditList);
      this.acceptedCreditList=this.creditList.filter((data)=>data.status=="En cours");
      this.refusedCreditList=this.creditList.filter((data)=>data.status=="Refuser");
      this.waitingCreditList=this.creditList.filter((data)=>data.status!="accepté"&&data.status!="Refuser");

    });


  }

}
