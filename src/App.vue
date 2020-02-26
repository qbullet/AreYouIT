<template>
  <div id="app">
    <div class="container">
      
      <formPage/>

      <div >
        <b-jumbotron bg-variant="dark" text-variant="white">
          <template v-slot:header><u>คุณเหมาะกับไอทีหรือเปล่านะ?</u></template>

          <template v-slot:lead>
            ระบบสนับสนุนช่วยการตัดสินใจการคัดเลือกนักศึกษาเพื่อเข้าเรียนในภาควิชาเทคโนโลยีสารสนเทศ มหาวิทยาลัยพระจอมเกล้าพระนครเหนือ
          </template>

          <hr class="my-4">

          <p>
            ระบบนี้สร้างขึ้นเพื่อช่วยการตัดสินใจโดยอ้างอิงจากสถิติในอดีตเท่านั้น
          </p>
        </b-jumbotron>
        
        <b-card  header-tag="header" footer-tag="footer" bg-variant="dark" text-variant="white">
          <template v-slot:header >
            <h1 class="mb-0">การทำนาย</h1>
          </template> 
          <b-container >
            <b-row >
              <b-col align="center" >
                <div id="chart" ></div>
                จากการทำนายกว่า {{this.result}} ครั้ง
              </b-col>
              <b-col align="center" style="padding-top:10%;" >                  
                <b-button variant="primary" size="lg"  v-b-modal.modal-form>เริ่มการทำนาย</b-button><br><br>
              </b-col>
            </b-row>
          </b-container>
          <template v-slot:footer>
            <em>IT3RA #19</em>
          </template>
        </b-card>
        
      </div>
      
    </div>
  </div>
</template>

<script>
//ApexCharts
import ApexCharts from 'apexcharts'
import formPage from './components/FormPage.vue'
import ResultProvider from './providers/ResultProvider'

export default {
  name: 'app',
  components: {
    formPage
  },
  data() {
    return{
      result:0,
    }
  },
  methods: {
  },
  async mounted() {

    let resp = await ResultProvider()
    this.result = resp.sumary
    let chartOptions = {
      series: [parseFloat(resp.appropriate),parseFloat(resp.inappropriate)],
      chart: {
        width: 440,
        foreColor: '#ffffff',
        type: 'pie',
      },
      legend: {
        position: 'bottom',
        fontSize: '20px',
      },
      labels: ['เหมาะสม', 'ไม่เหมาะสม'],
      colors: ['#ACE359','#ff0000' ],
      responsive: [{
        breakpoint: 440,
        options: {
          chart: {
            width: 325,
            foreColor: '#ffffff',
            fontSize: '14px',
          },
          legend: {
            position: 'right',
            fontSize: '20px',
          }
        }
      }]
    };

    let chart = new ApexCharts(document.querySelector("#chart"), chartOptions);
    chart.render();
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font-family: "Anantason-Regular";
  src: url("assets/fonts/Anantason-Regular.woff2") format("woff2"); /* Modern Browsers */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@font-face {
  font-family: "Anantason-Regular";
  src: url("assets/fonts/Anantason-Regular.woff2") format("woff2"); /* Modern Browsers */
  font-weight: normal;
  font-style: normal;
}

html , body {
  font-family: "Anantason-Regular";
  src: url("./../src/assets/fonts/Anantason-Regular.woff2") format("woff2"); /* Modern Browsers */
  font-weight: normal;
  font-style: normal;
}

</style>
