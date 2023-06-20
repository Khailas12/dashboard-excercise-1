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
}
