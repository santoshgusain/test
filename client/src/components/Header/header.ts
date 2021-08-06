import { Options, Vue } from 'vue-class-component';


@Options({
  props: {
    msg: String,
    info: String
  }
})
export default class Header extends Vue {
  msg!: string;
  loggedIn = false;
  count = 0
  created(){
     // check if user is not logged in alreay
     console.log('header created');
     const user = localStorage.getItem('user');
     if( user !== null && typeof user != 'undefined' && user.length > 0){
      this.loggedIn = true;
    }else{
       this.loggedIn = false;
     }
  }

}
