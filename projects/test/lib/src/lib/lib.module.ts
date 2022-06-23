import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
  ]
})
export class LibModule { 
  public static forRoot(): ModuleWithProviders<LibModule> {
    const dddd2 = $localize `:Message defined placeholder:Message not present`;
    console.log("sssss", dddd2);
    
    return {
      ngModule: LibModule,
      providers: [
      ]
    };
  }
}
