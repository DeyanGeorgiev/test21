<template>
    <div class="component" v-on:keyup.38="hello"  v-on:keyup.40="secnd" tabindex="0">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>

        <p>Age : {{ageHere()}}</p>
        <input type="text" v-model="message" >

    </div>
</template>
s
<script>
    import {eventBus} from '../main';

    export default {

        data: function () {
            return {
                age: 15,
            }
        },
        methods:{
            ageHere(){
                return this.age;

            },
            hello() {
                return alert('hello');
            },
            secnd() {
                return alert('button down');
            }
        },


        created() {
            eventBus.$on('ageChange',
                (age) => {
                     this.age = age;
                }
            )


        },

    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
