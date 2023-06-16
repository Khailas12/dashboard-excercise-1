import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  years: number[] = [2021, 2022, 2023]
  dashboardData: any[] = [];
  selectedYear: number | null = null;
  
  constructor(private dashbordService: DashboardService) { }

  ngOnInit(): void {
    this.getDashboardData();
  }

  selectYear(year: number | null): void {
    this.selectedYear = year;
    // Implement any further logic based on the selected year
  }
  
  getDashboardData(): void {
    this.dashbordService.getConditionData().subscribe({
      next: (dashboardData) => {
        console.log('===', dashboardData);
        this.dashboardData = dashboardData.data;
      }
    });
  }
}
