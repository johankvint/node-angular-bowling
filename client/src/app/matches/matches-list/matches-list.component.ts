import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MatchesListDataSource } from './matches-list-datasource';
import { MatchesService } from '../matches.service';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatchesListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'score'];

  constructor(private service: MatchesService) {}

  ngOnInit() {
    this.dataSource = new MatchesListDataSource(this.paginator, this.sort, this.service);
  }
}
