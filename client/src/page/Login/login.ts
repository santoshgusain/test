import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import router from '../../router';

@Options({
  props: {
    msg: String,
    info: String,
    isLogin: String,
  }
})


export default class Login extends Vue {
  
  msg!: string;
  isLogin!: boolean
  email     = "";
  password  = "";
  error     = false;
  form      = {
                email:'',
                password:''
              };


  created(){

    // console.log('is login',this.isLogin);
     // check if user is not logged in alreay
     const user = localStorage.getItem('user');
     if( user !== null && typeof user != 'undefined' && user.length > 0){
       router.push({name:'Dashboard'});
     }
  }

  async login (e:any){

    e.preventDefault();
    try{
      // verify login credential
      const {data} = await axios.post('http://localhost:3001/user/login',this.form,{ withCredentials: true });
      // if success then start user session
      if(data.status == 'success' ){
        localStorage.setItem('user',JSON.stringify(data.data));
        router.push({name:'Dashboard'});
      }else{
        this.error=true;
      }
    }catch(err){
      this.error=true;
      console.log(err);
    }
  }

  hideError(){
    this.error = false;
  }
}
