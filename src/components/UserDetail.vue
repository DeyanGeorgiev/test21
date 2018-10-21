<template>
    <div class="component"  v-on:keyup.38="$emit('name-show')" tabindex="0">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name : {{switchName()}}</p>
        <button tabindex="0">Reset name</button>
        <button @click="resetFn()">Reset name</button>
        <p>Age : {{ age}}</p>
    </div>
</template>

<script>
    import {eventBus} from '../main';

    export default {
        props: {
            myName: {
                type: String,
                required: true,
            },
            resetFn: Function

        },
        data: function () {
            return {
                age: 30,
            }
        },
        methods: {
            switchName() {
                return this.myName.split('').reverse().join('');
            },
            resetName() {
                return this.myName = 'Deyan';
                //this.$emit('nameReset', this.myName)
            },
            ageEdt() {

                //eventBus.$emit('ageChange', this.age)
                return this.age;
                eventBus.changeAge(this.age);
            },
            hello() {
                alert("hello");
            },
            showName(){
                return alert(this.myName);
            }


        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
