<template>
    <div>
        <div class="card" style="max-width:21rem;" >
            <ul class="list-group">
                <li class="list-group-item" style="background-color:black; color:pink; "> Welcome {{user.name }}! </li>
            </ul>
        </div>

        <table class="table" style="max-width:21rem; background-color:pink;">
 
  <tbody>
    <tr>
      <td>Basketball</td>
      <button type="button" class="btn btn-secondary" style="margin-right:2px;">Edit</button> 
      <button type="button" class="btn btn-dark" style="margin-left:20px;">Delete</button>
    </tr>
    <tr>
      
      <td>Baseball</td>
      <button type="button" class="btn btn-secondary" style="margin-right:2px;">Edit</button> 
      <button type="button" class="btn btn-dark" style="margin-left:20px;">Delete</button>
      
    </tr>
    <tr>
    
      <td>Football</td>
      <button type="button" class="btn btn-secondary" style="margin-right:2px;">Edit</button> 
      <button type="button" class="btn btn-dark" style="margin-left:20px;">Delete</button>
    </tr>
  
    <tr>
      
      <td>Boxing</td>
      <button type="button" class="btn btn-secondary" style="margin-right:2px;">Edit</button> 
      <button type="button" class="btn btn-dark" style="margin-left:20px;">Delete</button>
     
    </tr>

    <tr>
      
      <td>Soccer</td>
      <button type="button" class="btn btn-secondary" style="margin-right:20px;">Edit</button> 
      <button type="button" class="btn btn-dark" style="margin-right:20px;">Delete</button>
      
    </tr>

    <tr>
      
      <td>Cricket</td>
      <button type="button" class="btn btn-secondary" style="margin-right:20px;">Edit</button> 
      <button type="button" class="btn btn-dark" style="margin-right:20px;">Delete</button>
      
    </tr>

    <tr>
      
      <td>Golf</td>
      <button type="button" class="btn btn-secondary" style="margin-right:20px;">Edit</button> 
      <button type="button" class="btn btn-dark" style="margin-right:20px;">Delete</button>
      
    </tr>

  </tbody>
</table>



    </div>
</template>
 
<script>
import {  mapActions, mapGetters } from 'vuex';
export default {
    computed: mapGetters(["user"]),
    methods: {
        ...mapActions(["getProfile"])
    },
    created() {
        this.getProfile();
    }
};
</script>
 
<style>
 
</style>