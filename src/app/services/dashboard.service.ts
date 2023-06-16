import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private dashboardData = {
    data: [
      {
        name: 'No Document Cases',
        count: 100
      },
      {
        name: 'Document Received Cases',
        count: 50
      },
      {
        name: 'Work In Progress Cases',
        count: 50
      },
      {
        name: 'Quality Check Cases',
        count: 20
      },
      {
        name: 'Head Cases',
        count: 30
      },
      {
        name: 'Committee Review Cases',
        count: 40
      },
      {
        name: 'Finalized Cases',
        count: 60
      },
      {
        name: 'All Cases',
        count: 350
      }
    ]
  };

  constructor() {}

  getConditionData(): Observable<any> {
    return of(this.dashboardData);
  }

  getYears(): Observable<any[]> {
    const years = [
      { label: 'All Years', value: null },
      { label: '2020', value: 2020 },
      { label: '2021', value: 2021 },
      { label: '2022', value: 2022 },
      { label: '2023', value: 2023 }
    ];

    return of(years);
  }
}
