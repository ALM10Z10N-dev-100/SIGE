import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Directive({
  selector: '[tTranslate]'
})
export class TranslateDirective implements OnInit, OnDestroy {
  @Input('tTranslate') key!: string;
  private sub!: Subscription;

  constructor(
    private el: ElementRef,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.actualizarTexto();

    this.sub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.actualizarTexto();
    });
  }

  private actualizarTexto(): void {
    const texto = this.translate.instant(this.key);
    this.el.nativeElement.textContent = texto;
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}