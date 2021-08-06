import { Options, Vue } from 'vue-class-component';
import { mapState} from 'vuex'

@Options({
  props: {
    msg: String,
    info: String
  },
  computed: {
    ...mapState(['user', 'categories'])
  }
})
export default class Header extends Vue {
  msg!: string;
  loggedIn = false;
  count = 0
  created(){

    // console.log('here is state', this.$state);
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
