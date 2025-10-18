import {Component,ElementRef,HostListener,OnInit,ViewChild,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
})
export class CalendarioEmergenteComponent implements OnInit {
  isOpen = true;
  currentDate = new Date();
  currentMonth = this.currentDate.getMonth();
  currentYear = this.currentDate.getFullYear();
  calendarDays: Date[] = [];
  selectedDay: Date | null = null;

  activities: { [key: string]: string[] } = {};
  newActivity: string = '';
  reminderMessage: string = '';
  showReminder: boolean = false;

  @ViewChild('modal') modalRef!: ElementRef;

  constructor(private elementRef: ElementRef, private router:Router) {}

  dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
  ];

  holidayDates: string[] = [
    '2025-01-31', '2025-02-03', '2025-02-28', '2025-03-17', '2025-03-28',
    '2025-05-01', '2025-05-05', '2025-05-15', '2025-05-30', '2025-06-27',
  ];

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.modalRef) return;

    const clickedInside = this.modalRef.nativeElement.contains(event.target);
    if (!clickedInside && this.isOpen) {
      this.close();
    }
  }

 ngOnInit() {
  this.isOpen = true;
  this.generateCalendar();

  this.activities = {};

  // Buscar claves que empiecen con "calendar-"
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('calendar-')) {
      const dateKey = key.replace('calendar-', '');
      const value = localStorage.getItem(key);
      if (value) {
        this.activities[dateKey] = value.split(',').map(item => item.trim());
      }
    }
  }
}

  generateCalendar() {
    this.calendarDays = [];

    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const startDay = firstDay.getDay();
    const daysInMonth = new Date(
      this.currentYear,
      this.currentMonth + 1,
      0
    ).getDate();

    for (let i = startDay - 1; i >= 0; i--) {
      const date = new Date(this.currentYear, this.currentMonth, -i);
      this.calendarDays.push(date);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      this.calendarDays.push(
        new Date(this.currentYear, this.currentMonth, i)
      );
    }
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  isSelected(date: Date): boolean {
    if (!this.selectedDay) return false;
    return (
      date.getDate() === this.selectedDay.getDate() &&
      date.getMonth() === this.selectedDay.getMonth() &&
      date.getFullYear() === this.selectedDay.getFullYear()
    );
  }

  isHoliday(date: Date): boolean {
    const key = date.toISOString().split('T')[0];
    return this.holidayDates.includes(key);
  }

  get selectedKey(): string {
    return this.selectedDay
      ? this.selectedDay.toISOString().split('T')[0]
      : '';
  }

  selectDay(date: Date) {
    this.selectedDay = date;
  }

addActivity() {
  const key = this.selectedKey;
  if (!key || !this.newActivity.trim()) return;

  if (!this.activities[key]) {
    this.activities[key] = [];
  }

  this.activities[key].push(this.newActivity.trim());

  // Guardar como cadena separada por comas
  localStorage.setItem(`calendar-${key}`, this.activities[key].join(','));

  this.reminderMessage = `✅ Actividad agregada: "${this.newActivity.trim()}"`;
  this.showReminder = true;

  setTimeout(() => {
    this.showReminder = false;
    this.reminderMessage = '';
  }, 3000);

  this.newActivity = '';
}

close() {
  this.isOpen = false;
  this.router.navigate(['/']);
 }
 removeActivity(dayKey: string, index: number) {
  if (!this.activities[dayKey]) return;

  this.activities[dayKey].splice(index, 1);

  if (this.activities[dayKey].length === 0) {
    localStorage.removeItem(`calendar-${dayKey}`);
    delete this.activities[dayKey];
  } else {
    localStorage.setItem(`calendar-${dayKey}`, this.activities[dayKey].join(','));
  }
}
}
