import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'SLTravelPlan';
	constructor(private http: HttpClient) {}
	ngOnInit(): void {
		const testUrl = 'https://api.sl.se/api2/realtimedeparturesV4.json?key=e2a856b551654e4093432b07ab061962&siteid=9104&timewindow=60';
		this.http.get(testUrl).subscribe(
			(data) => {
				console.log(data);
			},
			(error) => {
				console.log(error);
			}
		);
	}
}
