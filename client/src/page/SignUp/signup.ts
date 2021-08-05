import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import router from '../../router';


@Options({
  props: {
    msg: String,
    info: String
  }
})
export default class SignUp extends Vue {
  msg!: string;

  // info!: string;

  email     = '';
  password  = '';
  firstName = '';
  lastName  = '';
  formData  = {};

  // register user
  async registerUser (e:any){
    e.preventDefault();

    try{

      this.formData ={
        email : this.email    ,
        password : this.password ,
        firstName : this.firstName,
        lastName : this.lastName
      }
  
      const {data} = await axios.post(`http://localhost:3001/user/`,this.formData,{ withCredentials: true });

      if(data.status == 'success'){
          router.push({name:'Login'});
      }else{
        console.log('Error occured');
      }
    }catch(err){
      console.log(err);
    }
  }
  
}
