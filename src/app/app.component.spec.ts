import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { initTestModule } from './config.test';

describe('AppComponent', () => {
  beforeEach(initTestModule);

  fit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  fit(`should have as title 'pokedex'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pokedex');
  });

  fit(
    'should render title',
    () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('pokedex');
    }
  );
}
);
