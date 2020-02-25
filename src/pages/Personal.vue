<template>
  <scroller>
    <div class="main-wrapper">
      <personal-header></personal-header>
      <personal-order class="order-btn"></personal-order>
      <personal-service class="service-btn"></personal-service>
      <text class="logout">退出登录{{storeCount}}</text>
    </div>
  </scroller>
</template>

<script>
import PersonalHeader from '@/components/PersonalHeader';
import PersonalOrder from '@/components/PersonalOrder';
import PersonalService from '@/components/PersonalService';
const modal = weex.requireModule('modal');
import store from '@/store'
export default {
  components: {
    PersonalHeader,
    PersonalOrder,
    PersonalService
  },
  computed: {
    storeCount() {
      return store.state.count
    }
  }
};
</script>

<style scoped>
.main-wrapper {
  padding-bottom: 150px;
}

.order-btn {
  margin-bottom: 18px;
}

.service-btn {
  margin-bottom: 80px;
}

.logout {
  height: 94px;
  background-color: #ffffff;
  font-size: 28px;
  text-align: center;
  line-height: 94px;
}
</style>
