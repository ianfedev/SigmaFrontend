import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html'
})

export class PaginationComponent implements OnInit {

  @Input() actualPage;
  @Input() route;
  @Input() queryParams;
  @Input() lastPage;
  @Input() centered;
  @Input() pageAsQuery = false;
  public type;
  public firstPage;
  public pages: number[];

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.paginator(this.lastPage, this.actualPage);
  }

  paginator(totalPages: number, currentPage: number = 1) {
    this.lastPage = totalPages;
    this.actualPage = currentPage;
    this.firstPage = 1;
    if (totalPages <= 7) {
      this.type = 'less_five';
      this.pages = Array.from({length: totalPages}, (v, k) => k + 1);
    } else {
      if (currentPage <= 5) {
        this.type = 'first_five';
        this.pages = Array.from({length: 7}, (v, k) => k + 1);
      } else if (currentPage + 5 >= totalPages) {
        this.type = 'last_five';
        const pagination = [];
        for (let i = totalPages - 6; i <= totalPages; i++) {
          pagination.push(i);
        }
        this.pages = pagination;
      } else {
        this.type = 'middle_paginator';
        const pagination = [];
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pagination.push(i);
        }
        this.pages = pagination;
      }
    }
  }

  navigate(page: number) {
    let params = {
      page: 1
    };
    if (this.queryParams) { params = this.queryParams; }
    if (this.pageAsQuery) { params.page = page; }
    if (!this.pageAsQuery) {
      this.router.navigate([this.route + page], {queryParams: params});
    } else {
      this.router.navigate([this.route], {queryParams: params});
    }
  }


}
