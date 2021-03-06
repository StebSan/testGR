import { Component, OnInit } from '@angular/core';
import { DatabusService } from '../../services/databus.service';
import { IBall } from '../../interfaces/Balls.interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent implements OnInit {

  balls: IBall[] = new Array(8)
  messageInformation: string = ''
  count = 0

  valueFG: FormGroup;
  value = 5
  total = 0

  flagStartGame = false

  constructor(
    private dataBusService: DatabusService,
    private formBuilder: FormBuilder
  ) {
    this.formBG()
  }

  ngOnInit(): void {
    this.getData()
  }


  /*
  * Recibe informacion desde componente ball-selector
  */
  getData(){
    this.dataBusService.getData().subscribe(resp => {

      if(resp == "clear"){
        this.clearData()
        return

      }else if(resp != null){
        if(resp.result == false){
          const repet = this.findBall(resp, this.balls)

          if(this.count <= 7){
            if(repet == 0){
              this.balls.unshift(resp)
              this.balls.pop()
              this.count++
              this.total = this.value * this.count

            }else{
              this.messageErr('Ball repetid')
            }
          }else{
            this.messageErr('Complete')
          }
        }

      }

    })
  }

  /*
  * Limpia tablero
  */
  clearData(){
    this.balls = new Array(8)
    this.count = 0
    this.total = 0
  }

  /*
  * Busca ball repetida
  */
  findBall(newsBall: any, inStock: any[]): number {
    const repetid = inStock.filter(x => x?.id == newsBall.id)
    return repetid.length
  }

  /*
  * Genera mensajes de error
  */
  messageErr(message: string){
    this.messageInformation = message

    setTimeout(() => {
      this.messageInformation = ''
    }, 2500);
  }

  /*
  * Crea valores para valueFG
  */
  formBG(){
    this.valueFG = this.formBuilder.group({
      money: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.maxLength(10)]]
    })
  }

  /*
  * Valida apuesta
  */
  changeCost(money){
    if(money < 5){
      this.messageErr('Minimum bet is 5 ???')
      this.value = 5
      return
    }

    this.total = money * this.count
  }

  /*
  * Inicia Juego
  */
  startGame(){
    this.lottery()
    this.flagStartGame = true
  }

  /*
  * saca bola ganadora
  * compara bolas seleccionadas
  * envia bola ganadora
  */
  lottery() {
    const random = Math.floor(Math.random() * 10) + 1;

    const aux_balls = {
      id: random
    }

    const find = this.findBall(aux_balls ,this.balls)

    let result

    if(find == 1){
      result = {
        win: true,
        total: this.total * 1.5,
        balls: aux_balls
      }
    }else{
      result = {
        win: false,
        balls: aux_balls
      }
    }

    this.dataBusService.sendData(result)
  }

}
