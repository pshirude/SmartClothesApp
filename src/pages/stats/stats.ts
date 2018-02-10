import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChartsModule  } from 'ng2-charts';

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage {
	
	constructor(public navCtrl: NavController) {
	}
	
	public barChartOptions:any = {
		scaleShowVerticalLines: false,
		responsive: true
	};
	
	//Chart Labels
	public barChartLabels:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
	public barChartType:string = 'bar';
	public barChartLegend:boolean = true;
	
	public pieChartLabels:string[] = ['Pepe Jeans', 'Ven Heusen', 'MnS', 'Vero Moda'];
	public pieChartType:string = 'pie';
	public pieChartLegend:boolean = true;

	// chart data array
	// get this data via REST call - category wise
    public barChartData:any[] = [
		{data: [20, 38, 40, 21, 82, 30], label: 'Formal Wear'},
		{data: [70, 55, 60, 52, 56, 51], label: 'Casual Wear'},
		{data: [10, 5, 0, 8, 2, 5], label: 'Party Wear'}
	];
	
	// get this data via REST call - brand wise
    public pieChartData:any[] = [
		{data: [20, 38, 40, 21]}
	];
	
	// chart events
	public chartClicked(e:any):void{
		console.log(e);
	}
	
	// chart events
	public chartHovered(e:any):void{
		console.log(e);
	}
}
