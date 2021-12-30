<template>
  <IonPage>
    <IonContent>
      <div class="camera" v-show="is_show_camera">
        <video id="video">Video stream not available.</video>
        <button id="startbutton">Take photo</button>
        <button @click="clearphoto()">Clear photo</button>
      </div>
      <canvas id="canvas"></canvas>
      <div class="output" v-show="is_show_picture">
        <img id="photo" alt="The screen capture will appear in this box." src="">
      </div>
      <button @click="scanner()">Scan photo</button>
      <div id="result"></div>
    </IonContent>
  </IonPage>
</template>

<script>
import {IonPage,  IonContent} from '@ionic/vue';
import { BrowserQRCodeReader  } from '@zxing/library';

export default {
  name: "web_camera",
  components:{IonPage,  IonContent},
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
    }
  },
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

      reader.decodeFromImage(this.dom_photo).then((result) => {
        console.log(result)
        document.getElementById('result').textContent = result.text
      }).catch((err) => {
        console.error(err)
        document.getElementById('result').textContent = err
      })
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