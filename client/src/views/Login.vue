<template>
    <div>
        
        <div class="row">
            <div class="card mx-auto" style="background-color:black; border-radius: 25px; padding: 10px;">
                <div class="card-header" style="color:black; background-color:pink; border-radius: 15px; padding: 10px;">
                    <h4> Login </h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="loginUser">
                        <div class="form-group">
                            <label for="username" style="color:pink;"> Username </label>
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
                            <label for="password" style="color:pink;"> Password </label>
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
                        
                        <input type = "submit" class = "btn btn-dark" style="color:pink; border-radius: 8px; padding: 8px;" value="Login">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <router-link to="/register" class="card-link" style="color:rgb(214, 4, 134);">  New streamer? </router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        ...mapActions(['login']),
        loginUser() {
            let user = {
                username: this.username,
                password: this.password
            };
            console.log("user");
            this.login(user)
            .then(res => {
                if(res.data.success) {
                    this.$router.push ("/profile");
                }
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
};
</script>
 
<style scoped>
.card-head{
    background-color: purple;
}
.card {
    width: 40%;
    border-radius: 0;
}
.btn {
    border-radius: 0;
    background-color: black;
}
.form-control {
    border-radius: 0;
}
 
</style>