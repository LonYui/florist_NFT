<template>
  <IonPage>
    <IonContent>
      <div class="camera" v-show="is_show_camera">
        <video id="video">Video stream not available.</video>
        <IonButton id="startbutton">Take photo</IonButton>
        <IonButton @click="clearphoto()">Clear photo</IonButton>
      </div>
      <canvas id="canvas"></canvas>
      <div class="output" v-show="is_show_picture">
        <img id="photo" alt="The screen capture will appear in this box." src="">
      </div>
      <IonButton @click="scanner()">Scan photo</IonButton>
      <div >{{qr_code_str}}</div>
      <IonButton @click="verify_restaurant()">verify restaruant</IonButton>
    </IonContent>
  </IonPage>
</template>

<script>
import {IonPage,  IonContent, IonButton} from '@ionic/vue';
import { BrowserQRCodeReader  } from '@zxing/library';
import router from "@/router";

export default {
  name: "web_camera",
  components:{IonPage,  IonContent, IonButton},
  data() {
    return {
      is_show_camera:true,
      is_show_picture:false,

      dom_video: '',
      dom_canvas: '',
      dom_photo: '',
      dom_startbutton: '',

      width:320,
      height:0,

      toggle_camera_picture:'camera_mode',
      qr_code_str : ''
    }
  },
  props:['place_id','mob'],
  methods: {
    takepicture() {
      const width = this.width
      const height = this.height
      var context = this.dom_canvas.getContext('2d');
      if (width && height) {
        this.dom_canvas.width = width;
        this.dom_canvas.height = height;
        context.drawImage(this.dom_video, 0, 0, width, height);

        var data = this.dom_canvas.toDataURL('image/png');
        this.dom_photo.setAttribute('src', data);
      } else {
        this.clearphoto();
      }
    },
    clearphoto() {
      const canvas = this.dom_canvas
      var context = this.dom_canvas.getContext('2d');
      context.fillStyle = "#AAA";
      context.fillRect(0, 0, canvas.width, canvas.height);

      var data = this.dom_canvas.toDataURL('image/png');
      this.dom_photo.setAttribute('src', data);
    },
    scanner(){
      const reader = new BrowserQRCodeReader();
      const _this = this
      reader.decodeFromImage(this.dom_photo).then((result) => {
        console.log(result)
        _this.qr_code_str = result.text
      }).catch((err) => {
        console.error(err)
        _this.qr_code_str = err
      })
    },
    verify_restaurant(){
      // 1Get 發票開立日期,賣方名稱,賣方營業人統編 By request Taiwan GOV receipt API- 查詢發票明細



      // 2Get 餐廳名稱 by call CCB api GET restaurant/<restaurant_id>

      // 3比對資料1：賣方名稱&餐廳名稱
      //   賣方名稱 和 餐廳名稱 符合則通過#end
      //   不符合 -> 進行比對2

      //4 Get 公司名稱 by call CCB api GET company/<賣方營業人統編>

      //5 比對資料2：公司名稱&餐廳名稱
      // 公司名稱&餐廳名稱 符合則通過驗證#end
      // 不符合 -> 不通過驗證#end

        this.push_to_comment_page()
      return true
    },
    push_to_comment_page(){
      router.push(`/create_comment?qr_code_str=${this.qr_code_str}&place_id=${this.place_id}&mob=${this.mob}`).then(()=>{window.location.reload()})
    },

  },
  watch:{
    'toggle_camera_output': function (val){
      if (val === 'camera_mode'){
        this.is_show_camera=true
        this.is_show_picture=false
      }
      else if(val === 'picture_mode'){
        this.is_show_camera=false
        this.is_show_picture=true
      }
    }
  },
  mounted(){
// init camera
    var streaming = false;

    this.dom_video = document.getElementById('video');
    this.dom_canvas = document.getElementById('canvas');
    this.dom_photo = document.getElementById('photo');
    this.dom_startbutton = document.getElementById('startbutton');
    const _this = this
    navigator.mediaDevices.getUserMedia({ video: {facingMode: 'environment'}, audio: false })
        .then(function(stream) {
          _this.dom_video.srcObject = stream;
          _this.dom_video.play();
        })
        .catch(function(err) {
          console.log("An error occurred: " + err);
        });
    
    this.dom_video.addEventListener('canplay', function(){
      const width = _this.width
      if (!streaming) {
        _this.height = _this.dom_video.videoHeight / (_this.dom_video.videoWidth/width);

        _this.dom_video.setAttribute('width', width);
        _this.dom_video.setAttribute('height', _this.height);
        _this.dom_canvas.setAttribute('width', width);
        _this.dom_canvas.setAttribute('height', _this.height);
        streaming = true;
      }
    }, false);

    this.dom_startbutton.addEventListener('click', function(ev){
      _this.takepicture();
      _this.toggle_camera_picture='picture_mode'
      ev.preventDefault();
    }, false);
  }
}
</script>