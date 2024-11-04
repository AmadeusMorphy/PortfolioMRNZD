import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  pages = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    '',
    'Its common for many individuals to feel immense excitement and anticipation at the thought of being in a relationship. This excitement often stems from alack of understanding about the core elements of love. Many people enter relationships without a clear understanding of what a relationship entails or the skills necessary to nurture it. Just like any language, love is a language. No one can speak French, for example, without learning it. Yet, theres a prevalent misconception that love should be instinctive and effortless. Without proper understanding, individuals may mistake intense emotions for love. They may begin relationships based on these fleeting feelings, which can initially seem fulfilling. However, as the relationship progresses, confusion and challenges often arise. This is because the foundation was built on emotions rather than a deep, informed understanding of love and partnership',
  ]
}