import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
    info: String
  }
})
export default class Login extends Vue {
  msg!: string;
  // info!: string;
}
