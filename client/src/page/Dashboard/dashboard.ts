import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import router from '../../router';



@Options({
  props: {
    msg: String,
    info: String
  }
})
export default class Dashboard extends Vue {
  msg!: string;

  loaded=false;
  welcomeMsg='';
  user = {
    firstName:'',
    lastName:'',
  };
  welcome= true;
  // info!: string;

  hideWelcome(){
    this.welcome=false;
  }


  async created(){
    console.log('created');
    // const {data} = await axios.post('http://localhost:3001/user/session',{},{withCredentials: true});
    // if(data===null || typeof data == 'undefined' || data.length == 0 ){
    //   router.push({name:'Login'});
    // }else{
    //   this.loaded=true;
    // }
     
    const user = localStorage.getItem('user');
    
    if( user === null || typeof user == 'undefined' || user.length == 0){
      router.push({name:'Login'});
    }else{
      const userdata  = JSON.parse(user);
      this.welcomeMsg = `Hi! ${userdata.firstName}`;
      this.loaded     = true;
    }
  }

  async logout(){
    localStorage.clear();
    router.push({name:'Login'});
    // const {data} = await axios.post('http://localhost:3001/user/logout',{},{withCredentials: true});

    // if(data.logout){
    //   router.push({name:'Login'});
    // }
  }

  // async beforeMount(){
  //   const {data} = await axios.get('http://localhost:3001/session',{withCredentials: true});
  //   if(data===null || typeof data == 'undefined'){
  //   }
  //   // router.push({name:'Login'});
  //   console.log('not mounted');
  //   console.log(data);
  // }
  mounted(){
    console.log(' mounted');
  }
}
