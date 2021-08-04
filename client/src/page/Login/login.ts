import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import router from '../../router';

@Options({
  props: {
    msg: String,
    info: String
  }
})
export default class Login extends Vue {
  msg!: string;
  email  = "";
  password  = "";
  error = false;
  form = {
    email:'',
    password:''
  };
  // info!: string;
  async login (e:any){
    e.preventDefault();

    try{
      // let data = await axios.get('http://localhost:3001/user');
      // console.log(data);
      const {data} = await axios.post('http://localhost:3001/login',this.form,{ withCredentials: true });

      if(data.status == 'success' ){
        router.push({name:'Dashboard'});
      }else{
        this.error=true;
      }

      console.log(data);
      this.form.email = '';

    }catch(err){
      console.log(err);
    }
    // this.error = true;
    // router.push({name:'SignUp'}) 
  }
}
