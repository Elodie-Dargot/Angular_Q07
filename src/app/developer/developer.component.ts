import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit{

  dev1!: Developer

  ngOnInit(): void {
    let skills = []
    this.dev1 = new Developer(
      "Doe",
      "John",
      35,
      "Male",
      "Développeur fullstack avec 10 ans d/'expérience",
      skills = [new Skill("java","https://logos-marques.com/wp-content/uploads/2021/03/Java-Logo-500x283.png","https://www.java.com/fr/"), new Skill("Angular", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/langfr-220px-Angular_full_color_logo.svg.png", "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjSgIv2yciBAxVgVqQEHSbWDUoQFnoECAYQAQ&url=https%3A%2F%2Fangular.io%2F&usg=AOvVaw2etFta1TXj3OCM8r72lVr8&opi=89978449")]
  )}
}
