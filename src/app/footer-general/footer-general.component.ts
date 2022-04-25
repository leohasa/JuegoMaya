import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-general',
  template: `
  <br><br><br><br>
<footer class="text-center text-white fixed-bottom" >
      <!-- Copyright -->
      <div class="text-center text-white p-3" id="copyright">
        © 2021 Copyright Teoria de Sistemas 2 on
        <a href="https://github.com/L2AsHdz/JuegoMaya.git" class="text-reset" target="_blank" id="githubURL">
          <i class="fab fa-github"></i>
        </a>
        <!-- Github -->
      </div>
      <!-- Copyright -->
    </footer>
  `,
  styles: [
    `
    #copyright{
      background-color: rgba(0, 0, 0, 0.5);
      font-size: 22px;

      }
      #githubURL{
   	margin-top: 8px;
   	font-size: 30px;
   	font-weight: 500;
   	text-decoration: none;
   	color: #000000;
   	transition: all 0.3s ease;
  }


  `
  ]
})
export class FooterGeneralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
