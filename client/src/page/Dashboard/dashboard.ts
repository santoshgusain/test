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
  // info!: string;

  async created(){
    console.log('created');
    const {data} = await axios.get('http://localhost:3001/session',{withCredentials: true});
    if(data===null || typeof data == 'undefined' || data.length == 0 ){
      router.push({name:'Login'});
    }else{
      this.loaded=true;
    }
    this.welcomeMsg= `Hi! ${data.firstName}`;

    console.log('not mounted');
    console.log(data.length);
    
  }

  async logout(){
    const {data} = await axios.post('http://localhost:3001/logout',{},{withCredentials: true});

    if(data.logout){
      router.push({name:'Login'});
    }
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
