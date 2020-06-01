import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncrementalSearchComponent } from './incremental-search/incremental-search.component';
import { PrincipalComponent } from './principal/principal.component';
import { BisectionComponent } from './bisection/bisection.component';
import { NewtonComponent } from './newton/newton.component';
import { FalseRuleComponent } from './false-rule/false-rule.component';
import { FixedPointComponent } from './fixed-point/fixed-point.component';
import { SecantComponent } from './secant/secant.component';
import { MultipleRootsComponent } from './multiple-roots/multiple-roots.component';
import { GaussSimpleComponent } from './gauss-simple/gauss-simple.component';
import { GaussPartialComponent } from './gauss-partial/gauss-partial.component';
import { GaussTotalComponent } from './gauss-total/gauss-total.component';
import { LuSimpleComponent } from './lu-simple/lu-simple.component';
import { LuPivotComponent } from './lu-pivot/lu-pivot.component';
import { JacobiComponent } from './jacobi/jacobi.component';
import { GaussSeidelComponent } from './gauss-seidel/gauss-seidel.component';
import { SorComponent } from './sor/sor.component';
import { PlotGeneralComponent } from './plot-general/plot-general.component';


const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'plot', component: PlotGeneralComponent},
  { path: 'incremental_search', component: IncrementalSearchComponent},
  { path: 'bisection', component: BisectionComponent},
  { path: 'newton', component: NewtonComponent},
  { path: 'false_rule', component: FalseRuleComponent},
  { path: 'fixed_point', component: FixedPointComponent},
  { path: 'secant', component: SecantComponent},
  { path: 'multiple_roots', component: MultipleRootsComponent},
  { path: 'gauss_simple', component: GaussSimpleComponent},
  { path: 'gauss_partial', component: GaussPartialComponent},
  { path: 'gauss_total', component: GaussTotalComponent},
  { path: 'lu_simple', component: LuSimpleComponent},
  { path: 'lu_pivot', component: LuPivotComponent},
  { path: 'jacobi', component: JacobiComponent},
  { path: 'gauss_seidel', component: GaussSeidelComponent},
  { path: 'sor', component: SorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
