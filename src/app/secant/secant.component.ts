import { Component, OnInit } from '@angular/core';
import {ServiceDataService} from '../service-data.service'

declare const showFunction:any;

@Component({
  selector: 'app-secant',
  templateUrl: './secant.component.html',
  styleUrls: ['./secant.component.scss']
})
export class SecantComponent implements OnInit {
  public method = {
    a : 0,
    b : 0,
    tol : 0,
    iters : 0,
    f : ""
  }
  public errors = "";
  public results : [];
  public functions = ["x"];

  constructor(public request : ServiceDataService) {

  }

  ngOnInit(): void {
    this.method.f = localStorage.getItem('f');
    this.functions[0] = this.method.f;
    showFunction(this.functions);
  }
  ab(){
    if(this.method.a === this.method.b) this.errors = "A must be !== to B"
    else this.errors = ""
  }

  tol(){
    if(this.method.tol < 0) this.errors = "Tolerance must be positive"
    else this.errors = ""
  }

  iters(){
    if(this.method.iters < 1) this.errors = "Iters must be > 0"
    else this.errors = ""
  }
  onKeyFunction(event: any){
    try{
      this.functions[0] = this.method.f;
      showFunction(this.functions);
      this.errors = "";
    }catch{
      this.errors = "unrecognized function";
      showFunction("x");
    }

  }
  getResults(){
    localStorage.setItem('f',this.functions[0]);
    this.request.getJson("secant", {a: Number(this.method.a), b: Number(this.method.b), tol: Number(this.method.tol), iters: Number(this.method.iters), f: this.method.f}).subscribe((res: any) => {
      if(res.error){
        this.errors = res.source;
        this.results = [];
        if(res.method.iters){
          this.results = res.method.iters;
        }
        setTimeout(_=>{
          this.errors = ""
        },6000)

      }else{
        this.errors = "";
        this.results = res.method.iters;
      }
    });

  }


}


