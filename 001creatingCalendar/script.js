'use strict'

function createCalendar(elem, year, month) {
    const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Obtener el número de días en el mes
    let firstDayOfMonth = new Date(year, month, 1).getDay(); // Obtener el primer día de la semana para el mes
  
    // Ajustar para que Lunes sea el primer día de la semana
    if (firstDayOfMonth === 0) {
        firstDayOfMonth = 6; // Cambiar el índice del domingo (0) a sábado (6)
    } else {
        firstDayOfMonth -= 1; // Restar 1 a los demás días de la semana
    }
  
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
  
    // Crear encabezados con los nombres de los días de la semana
    for (const day of daysOfWeek) {
      const th = document.createElement('th');
      th.textContent = day;
      headerRow.appendChild(th);
    }
  
    table.appendChild(headerRow);
  
    let currentDay = 1;
  
    // Crear filas y celdas para cada día del mes
    for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');
  
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');
  
        if (i === 0 && j < firstDayOfMonth) {
          // Celdas vacías para los días del mes anterior
          cell.textContent = '';
        } else if (currentDay <= daysInMonth) {
          // Celdas con los días del mes actual
          cell.textContent = currentDay;
          currentDay++;
        }
  
        row.appendChild(cell);
      }
  
      table.appendChild(row);
    }
  
    elem.appendChild(table);
}

// Llamado de ejemplo
const cal = document.getElementById('calendarioContainer');

// El mes en JavaScript se indexa desde 0, por lo que 9 representa octubre
createCalendar(cal, 2024, 1); 
