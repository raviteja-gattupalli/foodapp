<script>
import { mapActions } from 'vuex';

export default {
  name: 'Logout',
  mounted() {
    this.Logout();
  },
  methods: {
    ...mapActions(['setLoginAction']),
    Logout() {
      this.setLoginAction('');
      this.$router.push('/');
    },
  },
};
</script>
