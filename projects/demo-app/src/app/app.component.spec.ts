import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { FileUploadModule } from "ng2-file-upload";
import { MatProgressBarModule } from "@angular/material/progress-bar";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [
      MatCardModule,
      MatIconModule,
      MatTableModule,
      MatButtonModule,
      MatDividerModule,
      FileUploadModule,
      MatProgressBarModule  
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular File Upload - Demo App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular File Upload - Demo App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Angular File Upload - Demo App');
  });
});
