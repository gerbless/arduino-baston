import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import {AlertController} from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private bluetoothSerial: BluetoothSerial, private alertController: AlertController){}

  ActivarBluetooth(){
    this.bluetoothSerial.isEnabled()
      .then(res => {
        this.isEnabled('IsOn');
      }, err => {
        this.isEnabled('IsOff');
      });
  }

  async isEnabled(msg: string){
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: msg,
      buttons: [{
        text: 'ok',
        handler: () => console.log('ok')
      }]
    });
  }

/*Devices
  constructor(private bluetoothSerial:BluetoothSerial,private alertController: AlertController) {}

  
  ActivarBluetooth(){
  this.bluetoothSerial.isEnabled().then(response=>{
    //this.isEnabled("IsOn");
    this.Listdivices()
  },error=>{
    this.isEnabled("IsOff");
  })
}

listdivices (){
  this.bluetoothSerial.list().then(response=>{ 
   this.Devices=response
  },error=> {
    console.log("error")
  }
  )
}

connect(address){
  this.bluetoothSerial.connect(address).subscribe(succes=>{
   this.deviceConnected()  
  },error=>{
  console.log("error")
  })
}

deviceConnected(){
  this.bluetoothSerial.subscribe('/n').subscribe(success=>(
   this.hundler(success)
  })
}

hundler(){
  console.log(value)
}

sebData(){
  this.bluetoothSerial.write("7").then(reponse=>{
    console.log("ok")
  },error=>{
  console.log("a problem")
  }
  )
}

Disconected(){
  this.bluetoothSerial.disconect()
  console.log("dispositivo desconectado")
}

async isEnabled(msg){
const alert =await this.alertController.create({
  header: 'Alerta',
  message:msg,
  buttons:[{
    text:'ok'
    handler:()=>{
      console.log("ok")
    }
   }]
  })
 }*/
}
