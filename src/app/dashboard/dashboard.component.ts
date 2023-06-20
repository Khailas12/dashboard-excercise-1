import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  dashboardData: any[] = [];
  year: string = '';
  users: string = '';

  totalYears = [
    { label: 'All Year', value: 'all_year' },
    { label: '2023', value: '2023' },
    { label: '2022', value: '2022' },
    { label: '2021', value: '2021' }
  ];

  totalUsers = [
    { label: 'All', value: 'All' },
    { label: 'Admin', value: 'Admin' },
    { label: 'User', value: 'User' }
  ];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getDashboardData();
  }

  getDashboardData(): void {
    this.dashboardService.getConditionData().subscribe({
      next: (dashboardData) => {
        console.log('===', dashboardData);
        this.dashboardData = dashboardData.data;
      }
    });
  }

  searchButtonDisable(): boolean {
    return !!this.year && !!this.users;
  }
}
