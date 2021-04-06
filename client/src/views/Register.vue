<template>
    <div>
    
        <div class="row">
            <div class="card mx-auto" style="background-color:black; border-radius: 15px; padding: 5px;">
                <div class="card-header" style="color:black; background-color:pink; border-radius: 15px; padding: 10px;">
                    <h4> Sign Up! </h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="registerUser">
                        <div class="form-group">
                        <input 
                            id="username"
                            type="text"
                            placeholder="Username" 
                            name= "username" 
                            v-model="username" 
                            class="form-control"
                            style="border-radius: 25px; padding: 10px;"
                        
                        >
                        </div>

                        <div class="form-group">
                        
                        <input 
                            id="name"
                            type="text"
                            placeholder="Name" 
                            name= "name" 
                            v-model="name" 
                            class="form-control"
                            style="border-radius: 25px; padding: 10px;"
                        >
                        </div>

                        <div class="form-group">
                            
                        <input 
                            id="email"
                            type="text"
                            placeholder="Email" 
                            name= "email" 
                            v-model="email" 
                            class="form-control"
                            style="border-radius: 25px; padding: 10px;"
                        >
                        </div>

                        <div class="form-group">
                            
                        <input 
                            type="password" 
                            class="form-control" 
                            placeholder="Password" 
                            name="password" 
                            id="password" 
                            v-model="password"
                            style="border-radius: 25px; padding: 10px;"
                        >
                        </div>

                        <div class="form-group">
                            
                        <input 
                            type="password" 
                            class="form-control" 
                            placeholder="Confirm Password" 
                            name="confirm_passwordd" 
                            id="confirm_password" 
                            v-model="confirm_password"
                            style="border-radius: 25px; padding: 10px;"
                        >
                        </div>

                        <button class = "btn btn-dark " style="color:pink;"> Register </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <router-link to="/login" class="card-link" style="color:rgb(214, 4, 134);"> Don't have an account? </router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return {
            username: "",
            password: "",
            confirm_password: "",
            name: "",
            email: ""
        };
    },

    methods: {
        ...mapActions(['register']),
        registerUser() {
            let user = {
                username: this.username,
                password: this.password,
                confirm_password: this.confirm_password,
                email: this.email,
                name: this.name
            };
            this.register(user).then(res => {
                if(res.data.success) {
                    this.$router.push('login');
                }
            });
        }
    }
};
</script>

<style scoped>
.card {
  width: 40%;
  border-radius: 0;
}
.btn {
  border-radius: 0;
}
.form-control {
  border-radius: 0;

}

</style>
