import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  years: any[] = [];
  dashboardData: any[] = [];
  selectedYear: number | null = null;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getDashboardData();
    this.getYears();
  }

  selectYear(year: number | null): void {
    this.selectedYear = year;
  }

  getDashboardData(): void {
    this.dashboardService.getConditionData().subscribe({
      next: (dashboardData) => {
        console.log('===', dashboardData);
        this.dashboardData = dashboardData.data;
      }
    });
  }

  getYears(): void {
    this.dashboardService.getYears().subscribe((years) => {
      this.years = years;
    });
  }
}
