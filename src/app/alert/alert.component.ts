import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export function showBRAlert(
    message: string,
    type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" = "success",
    duration: number = 7000
) {
    const container = document.getElementById("br-alert-container");
    if (!container) return;

    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${type} alert-dismissible br-alert-slide`;
    alertDiv.setAttribute("role", "alert");

    alertDiv.innerHTML = `
    <b>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </b>
    `;

    container.appendChild(alertDiv);

    // Animate in
    requestAnimationFrame(() => {
        alertDiv.classList.add("show");
    });

    // Auto close
    setTimeout(() => {
        alertDiv.classList.add("hide"); // fade/slide out

        // Wait for animation, then remove
        setTimeout(() => alertDiv.remove(), 300);
    }, duration);
}
