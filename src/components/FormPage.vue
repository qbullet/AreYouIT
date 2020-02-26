<template>
  <div class="formPage">
    
    <b-modal 
        id="modal-form" 
        ref="modal-form"
        size="md" 
        title="กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง" 
        scrollable 
        :header-bg-variant="headerBgVariant"
        :header-text-variant="headerTextVariant"
        :body-bg-variant="bodyBgVariant"
        :body-text-variant="bodyTextVariant"
        :footer-bg-variant="footerBgVariant"
        :footer-text-variant="footerTextVariant"
    >
        <template>
            <div align="left">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-container>
                    <b-row>
                        <b-col>เพศ : </b-col>
                        <b-col>
                            <b-form-group >
                                <b-form-radio-group
                                id="btn-radios-gender"
                                v-model="form.gender"
                                :options="options.genders"
                                buttons
                                required
                                button-variant="outline-dark"
                                name="radios-btn-default"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-container>

                <b-container>
                    <b-row>
                        <b-col>ภูมิภาคของโรงเรียน : </b-col>
                        <b-col>
                            <b-form-group id="input-group-scRegion" label-for="input-scRegion">
                                <b-form-select
                                id="input-scRegion"
                                v-model="form.scRegion"
                                :options="options.scRegions"
                                required
                                ></b-form-select>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-container>

                <b-container class="bv-example-row">
                    <b-row>
                        <b-col>รูปแบบการเข้าศึกษา : </b-col>
                        <b-col><b-form-group id="input-group-admit" label-for="input-admit" >
                            <b-form-select
                            id="input-admit"
                            v-model="form.admit"
                            :options="options.admits"
                            required
                            ></b-form-select>
                        </b-form-group></b-col>
                    </b-row>
                </b-container>

                <b-container style="margin-top:3%">
                    <b-row>
                        <b-col>เกรดเฉลี่ยตอนมัธยม : </b-col>
                        <b-col>
                            <b-form-group >
                                <b-form-radio-group
                                id="btn-radios-gpa"
                                v-model="form.gpa"
                                :options="options.gpas"
                                buttons
                                required
                                button-variant="outline-dark"
                                name="radios-btn-default"
                                size="sm"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-container>

                <b-container>
                    <b-row>
                        <b-col>ทักษะภาษาอังกฤษ : <b>{{options.englishSkills[form.englishSkill]}}</b></b-col>
                        <b-col>
                            <b-form-input 
                                id="input-englishSkill"
                                v-model="form.englishSkill" 
                                step="1"
                                min="0"
                                max="3"
                                type="range"
                            ></b-form-input>
                        </b-col>
                    </b-row>
                </b-container>

                <b-container style="margin-top:3%">
                    <b-row>
                        <b-col>ทัศนคติกับไอที : </b-col>
                        <b-col>
                            <b-form-group >
                                <b-form-radio-group
                                id="btn-radios-ITOpinion"
                                v-model="form.ITOpinion"
                                :options="options.ITOpinions"
                                buttons
                                required
                                button-variant="outline-dark"
                                name="radios-btn-default"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-container>

                <b-container style="margin-top:0%">
                    <b-row>
                        <b-col>การทำการบ้านด้วยตนเอง : </b-col>
                        <b-col>
                            <b-form-group >
                                <b-form-radio-group
                                id="btn-radios-doHWByUrself"
                                v-model="form.doHWByUrself"
                                :options="options.doHWByUrselves"
                                buttons
                                required
                                button-variant="outline-dark"
                                name="radios-btn-default"
                                size="sm"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-container>

                <b-container style="margin-top:0%">
                    <b-row>
                        <b-col>สอบถามอาจารย์เมื่อมีข้อสงสัย : </b-col>
                        <b-col>
                            <b-form-group >
                                <b-form-radio-group
                                id="btn-radios-askInstructor"
                                v-model="form.askInstructor"
                                :options="options.askInstructors"
                                buttons
                                required
                                button-variant="outline-dark"
                                name="radios-btn-default"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-container>

                <b-container style="margin-top:0%">
                    <b-row>
                        <b-col>มีความกังวลกับการติด "F" : </b-col>
                        <b-col>
                            <b-form-group >
                                <b-form-radio-group
                                id="btn-radios-FConcern"
                                v-model="form.FConcern"
                                :options="options.FConcerns"
                                buttons
                                required
                                button-variant="outline-dark"
                                name="radios-btn-default"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-container>

                <b-container class="bv-example-row">
                    <b-row>
                        <b-col>การเตรียมตัวสอบ : </b-col>
                        <b-col><b-form-group id="input-group-testPrepare" label-for="input-testPrepare" >
                            <b-form-select
                            id="input-testPrepare"
                            v-model="form.testPrepare"
                            :options="options.testPrepares"
                            required
                            ></b-form-select>
                        </b-form-group></b-col>
                    </b-row>
                </b-container>

                <b-container style="margin-top:0%">
                    <b-row>
                        <b-col>พฤติกรรมการเล่นเกม : </b-col>
                        <b-col>
                            <b-form-group >
                                <b-form-radio-group
                                id="btn-radios-gaming"
                                v-model="form.gaming"
                                :options="options.gamings"
                                buttons
                                required
                                button-variant="outline-dark"
                                name="radios-btn-default"
                                size="sm"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-container>
                <b-button type="reset" variant="danger" id="resetBtn" style="display:none">Reset</b-button>
                <b-button type="submit" variant="primary" id="submitBtn" style="display:none">Submit</b-button>
            </b-form>
            </div>
        </template>
        <template v-slot:modal-footer>
            <b-button type="reset" variant="danger"  @click="fakeClick('resetBtn')">คืนค่า</b-button>
            <b-button type="submit" variant="primary" @click="fakeClick('submitBtn')">ยืนยัน</b-button>
        </template>
        
    </b-modal>
    
  </div>
</template>

<script>

import PredictProvider from './../providers/PredictProvider'

export default {
    name: 'formPage',
    props: {
        msg: String
    },
    data(){
        return{
            form: {
                scRegion: null,
                gender: null,
                admit:null,
                englishSkill:0,
                ITOpinion:null,
                doHWByUrself:null,
                askInstructor:null,
                FConcern:null,
                testPrepare:null,
                gaming:null,
                gpa:null,
                english:['Fair','Unsatisfy','Good','Execellent'],

            },

            options:{
                englishSkills:['ต้องปรับปรุง','พอใช้','ดี','ยอดเยี่ยม'],
                scRegions:[
                    {text: 'ภูมิภาคของโรงเรียน',value: null ,disabled: true},
                    {text: 'ภาคกลาง',value: 'Central' },
                    {text: 'ภาคเหนือ',value: 'Northern' },
                    {text: 'ภาคตะวันออกเฉียงเหนือ',value: 'Northeastern' },
                    {text: 'ภาคตะวันออก',value: 'Eastern' },
                    {text: 'ภาคตะวันตก',value: 'Western' },
                    {text: 'ภาคใต้',value: 'Southern' },
                ],

                admits:[
                    {text: 'รูปแบบการเข้าศึกษา',value: null ,disabled: true},
                    {text: 'พอร์ตโฟลิโอ',value: 'Portfolio' },
                    {text: 'TCAS',value: 'tcas' },
                    {text: 'โควต้าพื้นที่',value: 'area quota'},
                    {text: 'โควต้าเรียนดี',value: 'GoodGrade%20quota' },
                    {text: 'Admission',value: 'Admissions' },
                    {text: 'สอบตรง',value: 'Direct%20examination' },
                    {text: 'GAT-PAT',value: 'Get-pat' },
                    {text: 'O-Net',value: 'O-net' },
                ],
                
                genders: [
                    { text: 'เพศชาย', value: 'male' },
                    { text: 'เพศหญิง', value: 'female' }
                ],

                ITOpinions: [
                    { text: 'ง่าย', value: 'Easy' },
                    { text: 'ปานกลาง', value: 'Normal' },
                    { text: 'ยาก', value: 'Too%20Hard' }
                ],

                doHWByUrselves: [
                    { text: 'เสมอ', value: 'Always%20try' },
                    { text: 'บางครั้ง', value: 'Sometimes' },
                    { text: 'ลอกเพื่อน', value: 'Always%20peel%20friends' }
                ],

                askInstructors:[
                    { text: 'เสมอ', value: 'Dare' },
                    { text: 'บางครั้ง', value: 'Sometimes' },
                    { text: 'ไม่เลย', value: 'Not%20brave' }
                ],

                FConcerns:[
                    { text: 'เสมอ', value: 'Every%20time' },
                    { text: 'บางครั้ง', value: 'Sometimes' },
                    { text: 'ไม่เลย', value: 'Never' }
                ],

                testPrepares:[
                    {text: 'การเตรียมตัวสอบ',value: null ,disabled: true},
                    {text: 'อ่านหนังสือก่อนสอบหนึ่งสัปดาห์',value: 'Read%20the%20book%201%20week' },
                    {text: 'อ่านหนังสือก่อนสอบหนึ่งคืน',value: 'Read%20the%20book%201%20night' },
                    {text: 'อ่านหนังสือคนเดียว',value: 'Read%20book%20alone' },
                    {text: 'ติวกับเพื่อน',value: 'Tutoring%20with%20friends'},
                    {text: 'ไม่เตรียมตัวใดๆ',value: 'Not%20prepared' },
                    
                ],

                gamings:[
                    { text: 'ติดเกม', value: 'high' },
                    { text: 'เล่นบ้าง', value: 'medium' },
                    { text: 'ไม่เล่นเลย', value: 'Do%20not%20play' }
                ],

                gpas:[
                    { text: 'ต่ำกว่า 2.00' , value: 'Fair' },
                    { text: '2.00 ถึง 2.49' , value: 'Unsatisfy' },
                    { text: '2.50 ถึง 2.99' , value: 'Good' },
                    { text: '3.00 ขึ้นไป', value: 'Excellent' }
                ],

                                
            },
            show: true,
            headerBgVariant: 'dark',
            headerTextVariant: 'light',
            bodyBgVariant: 'light',
            bodyTextVariant: 'dark',
            footerBgVariant: 'dark',
            footerTextVariant: 'light'
        }

        
    },
    methods: {
        async onSubmit(evt) {
            evt.preventDefault()
            // alert(JSON.stringify(this.form))
            this.$refs['modal-form'].hide()

            let data = {}
            data.gender = this.form.gender
            data.region = this.form.scRegion
            data.admit = this.form.admit
            data.highschoolgpa = this.form.gpa
            data.englishskill = this.form.english[this.form.englishSkill]
            data.itthinking = this.form.ITOpinion
            data.dohw = this.form.doHWByUrself
            data.askteacher = this.form.askInstructor
            data.fconcern = this.form.FConcern
            data.testpre = this.form.testPrepare
            data.gaming = this.form.gaming

            // eslint-disable-next-line no-console
            let resp = await PredictProvider(data)
            let heading = ""
            let msg = ""
            let style = ""
            if(resp.state == 200){
                heading = "เป็นเรื่องที่น่ายินดี"
                msg = "คุณเหมาะสมกับสาขาไอที ด้วยค่าความมั่นใจเท่ากับ " + (resp.value*100) + '%'
                style = "success"
            }else if(resp.state == 100){
                heading = "เป็นเรื่องที่น่าเศร้า"
                msg = "คุณไม่เหมาะกับสาขาไอที ด้วยค่าความมั่นใจเท่ากับ " + (resp.value*100) + '%'
                style = "error"
            }

            this.$swal(heading,msg,style)
            
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.scRegion= null
            this.form.gender= null
            this.form.admit=null
            this.form.englishSkill=0
            this.form.ITOpinion=null
            this.form.doHWByUrself=null
            this.form.askInstructor=null
            this.form.FConcern=null
            this.form.testPrepare=null
            this.form.gaming=null
            this.form.gpa=null
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        fakeClick(button){
            document.getElementById(button).click()
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
