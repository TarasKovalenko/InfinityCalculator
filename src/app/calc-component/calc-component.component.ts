import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-calc-component',
  templateUrl: './calc-component.component.html',
  styleUrls: ['./calc-component.component.css']
})
export class CalcComponent implements OnInit {

  public data: BaseCalc;
  public commition: number = 0.2;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['commition']) {
        this.commition = params['commition'];
      }
    });

    if (this.commition) {
      this.data = new BaseCalc(this.commition);
    }
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  calcFunction() {
    this.data.totalRevenue = this.data.annualRevenue * this.data.customerNumber;
    this.data.annualRevenue = this.commition * this.data.basicScope / 100;

    for (let i = 0; i < 10; i++) {
      if (i == 0) {
        this.data.years[i] = this.data.totalRevenue;
      } else {
        this.data.years[i] = this.data.years[i - 1] / 100 * (100 + this.data.depositsToPortfolio + this.data.yieldOnPortfolio);
      }
    }

    this.data.summ = this.data.years.reduce((pv, cv) => pv + cv, 0);

    for (let i = 0; i < 10; i++) {
      this.data.brutoByYear[i] = this.data.years[i] / 12;
    }

    this.data.years.reverse();
    this.data.brutoByYear.reverse();
  }

}

export class BaseCalc {
  public basicScope: number;
  public annualRevenue: number;
  public customerNumber: number;
  public totalRevenue: number;
  public depositsToPortfolio: number;
  public yieldOnPortfolio: number;

  public years: number[] = [];
  public brutoByYear: number[] = [];
  public summ: number;

  constructor(commition: number = 0.2) {
    this.basicScope = 1000000;
    this.annualRevenue = commition * this.basicScope / 100;
    this.customerNumber = 100;

    this.totalRevenue = this.annualRevenue * this.customerNumber;

    this.depositsToPortfolio = 3;
    this.yieldOnPortfolio = 15;

    for (let i = 0; i < 10; i++) {
      if (i == 0) {
        this.years[i] = this.totalRevenue;
      } else {
        this.years[i] = this.years[i - 1] / 100 * (100 + this.depositsToPortfolio + this.yieldOnPortfolio);
      }
    }

    this.summ = this.years.reduce((pv, cv) => pv + cv, 0);

    for (let i = 0; i < 10; i++) {
      this.brutoByYear[i] = this.years[i] / 12;
    }

    this.years.reverse();
    this.brutoByYear.reverse();
  }
}