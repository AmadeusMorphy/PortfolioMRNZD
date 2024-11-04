import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-title',
  templateUrl: './book-title.component.html',
  styleUrls: ['./book-title.component.scss']
})
export class BookTitleComponent implements OnInit {
  private width = window.innerWidth;

  ngOnInit(): void {
    this.updateSpans();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const normalizedPosition = event.pageX / (this.width / 2) - 1;
    const speedSlow = 100 * normalizedPosition;
    const speedFast = 200 * normalizedPosition;

    const spansSlow = document.querySelectorAll('.spanSlow') as NodeListOf<HTMLElement>;
    const spansFast = document.querySelectorAll('.spanFast') as NodeListOf<HTMLElement>;

    spansSlow.forEach(span => {
      span.style.transform = `translate(${speedSlow}px)`;
    });

    spansFast.forEach(span => {
      span.style.transform = `translate(${speedFast}px)`;
    });
  }

  @HostListener('window:resize')
  onResize(): void {
    this.width = window.innerWidth;
  }

  private updateSpans(): void {
    // Initial setup or any other span-specific adjustments can go here if needed.
  }
}